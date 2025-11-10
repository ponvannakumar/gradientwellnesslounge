const twilio = require('twilio');
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        success: false, 
        message: 'Method not allowed' 
      })
    };
  }

  try {
    const { name, phone, message, email } = JSON.parse(event.body);

    console.log('📨 New contact form submission:', {
      name: name ? '✓' : '✗',
      phone: phone ? '✓' : '✗',
      email: email ? `✓ (${email})` : '✗',
      message: message ? '✓' : '✗',
      timestamp: new Date().toISOString()
    });

    // Validate required fields
    if (!name || !phone || !message) {
      console.log('❌ Validation failed: Missing required fields');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Missing required fields: name, phone, and message are required'
        })
      };
    }

    // Format the message for both WhatsApp and email
    const formattedMessage = `
New Contact Form Submission:

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ''}
Message: ${message}

Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim();

    // Initialize Twilio client
    const twilioClient = twilio(
      process.env.TWILIO_SID,
      process.env.TWILIO_AUTH
    );

    // Send WhatsApp message
    let whatsappSuccess = false;
    try {
      console.log('📱 Sending WhatsApp message...');
      
      const twilioMessage = await twilioClient.messages.create({
        from: process.env.WHATSAPP_FROM,
        to: process.env.WHATSAPP_TO,
        body: formattedMessage
      });

      whatsappSuccess = true;
      console.log('✅ WhatsApp message sent successfully');
      console.log('📱 Message SID:', twilioMessage.sid);
    } catch (whatsappError) {
      console.error('❌ WhatsApp error:', {
        message: whatsappError.message,
        code: whatsappError.code,
        status: whatsappError.status
      });
    }

    // Initialize Nodemailer transporter with Zoho-friendly defaults
    const smtpHost = process.env.EMAIL_HOST || 'smtp.zoho.com';
    const smtpPort = parseInt(process.env.EMAIL_PORT || '465', 10);
    const useSecure = process.env.EMAIL_SECURE
      ? process.env.EMAIL_SECURE !== 'false'
      : smtpPort === 465;

    const transporterConfig = {
      host: smtpHost,
      port: smtpPort,
      secure: useSecure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    if (!useSecure || smtpPort === 587) {
      transporterConfig.requireTLS = true;
    }

    if (process.env.EMAIL_IGNORE_TLS === 'true') {
      transporterConfig.tls = { rejectUnauthorized: false };
    }

    const transporter = nodemailer.createTransport(transporterConfig);

    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified!');
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', verifyError.message);
      throw new Error(
        `SMTP verification failed. Check EMAIL_HOST/PORT/USER/PASS. ${verifyError.message}`
      );
    }

    const adminEmail = process.env.EMAIL_TO || process.env.EMAIL_USER;
    const adminMail = {
      from: `"Gradient Holistic Wellness Lounge" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      replyTo: email || undefined,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b0000;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #8b0000; margin: 20px 0;">
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p><em>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</em></p>
        </div>
      `,
    };

    const autoReplyMail = email
      ? {
          from: `"Gradient Holistic Wellness Lounge" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: 'Thank you for contacting Gradient Wellness Lounge!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #8b0000;">Thank you for contacting Gradient Wellness Lounge!</h2>
              <p>Hi ${name},</p>
              <p>We received your message:</p>
              <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #8b0000; margin: 20px 0;">
                <p style="font-style: italic;">"${message}"</p>
              </div>
              <p>Our team will review your inquiry and get back to you within 24 hours.</p>
              <p>If you have any urgent questions, please call us at <strong>+91 95000 59260</strong>.</p>
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
              <p style="color: #666;">Best regards,<br>The Gradient Holistic Wellness Lounge Team</p>
            </div>
          `,
        }
      : null;

    let emailSuccess = false;
    try {
      console.log('📧 Sending email...');
      const sendTasks = [transporter.sendMail(adminMail)];

      if (autoReplyMail) {
        console.log(`📧 Sending auto-reply email to user: ${email}`);
        sendTasks.push(transporter.sendMail(autoReplyMail));
      }

      await Promise.all(sendTasks);
      emailSuccess = true;
      console.log('✅ All emails sent successfully!');
    } catch (emailError) {
      console.error('❌ Email error:', {
        message: emailError.message,
        code: emailError.code,
        response: emailError.response,
      });
    }

    // Determine response based on success
    if (whatsappSuccess && emailSuccess) {
      console.log('🎉 Both WhatsApp and email sent successfully');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Your message has been sent successfully via WhatsApp and email!'
        })
      };
    } else if (whatsappSuccess || emailSuccess) {
      const method = whatsappSuccess ? 'WhatsApp' : 'email';
      console.log(`✅ Only ${method} sent successfully`);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: `Your message has been sent successfully via ${method}!`
        })
      };
    }
  } catch (error) {
    console.error('❌ Unhandled error:', {
      message: error.message,
      stack: error.stack,
    });
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      }),
    };
  }
};
