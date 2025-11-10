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
    
    // --- ADMIN EMAIL STRUCTURE ---
    const adminMail = {
      from: `"Gradient Holistic Wellness Lounge" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      replyTo: email || undefined,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="background-color: #f8f5ee; padding: 30px 15px; font-family: 'Cormorant Garamond', serif, Arial, sans-serif; line-height: 1.6; color: #333333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
            
            <div style="background: linear-gradient(135deg, #8a1111 0%, #b91c1c 100%); padding: 35px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; letter-spacing: 1px;">New Inquiry</h1>
              <p style="margin: 8px 0 0; color: #ffffff; font-size: 16px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">GRADIENT HOLISTIC WELLNESS LOUNGE</p>
            </div>

            <div style="padding: 40px 30px;">
              <p style="margin-top: 0; font-size: 17px; color: #555555;">
                Hello Team,
                <br><br>
                You have received a new contact form submission from your website. Please review the details below and respond at your earliest convenience.
              </p>

              <div style="margin-top: 35px;">
                <h3 style="color: #8a1111; font-size: 20px; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #b91c1c; display: inline-block; font-weight: bold;">
                  Client Information
                </h3>
                <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
                  <tr>
                    <td style="width: 100px; font-weight: bold; color: #777777; vertical-align: top; font-size: 17px;">Name:</td>
                    <td style="color: #1a1a1a; font-size: 17px; font-weight: 500;">${name}</td>
                  </tr>
                  ${email ? `
                  <tr>
                    <td style="width: 100px; font-weight: bold; color: #777777; vertical-align: top; font-size: 17px;">Email:</td>
                    <td>
                      <a href="mailto:${email}" style="color: #b91c1c; text-decoration: none; font-weight: 500; font-size: 17px;">${email}</a>
                    </td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="width: 100px; font-weight: bold; color: #777777; vertical-align: top; font-size: 17px;">Phone:</td>
                    <td>
                      <a href="tel:${phone}" style="color: #1a1a1a; text-decoration: none; font-size: 17px;">${phone}</a>
                    </td>
                  </tr>
                </table>
              </div>

              <div style="margin-top: 30px;">
                <h3 style="color: #8a1111; font-size: 20px; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #b91c1c; display: inline-block; font-weight: bold;">
                  Message
                </h3>
                <div style="background-color: #fcf6ef; border-left: 4px solid #b91c1c; padding: 20px; border-radius: 4px; color: #444444; font-style: italic; font-size: 17px;">
                  "${message.replace(/\n/g, '<br>')}"
                </div>
              </div>

              ${email ? `
              <div style="margin-top: 40px; text-align: center;">
                <a href="mailto:${email}?subject=Re: Your inquiry to Gradient Wellness Lounge" style="background-color: #8a1111; color: #ffffff; display: inline-block; padding: 12px 25px; text-decoration: none; border-radius: 50px; font-weight: bold; text-transform: uppercase; font-size: 14px; letter-spacing: 0.5px; white-space: nowrap; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                  Reply to ${name}
                </a>
              </div>
              ` : ''}
            </div>

            <div style="background-color: #e5e5e5; padding: 20px; text-align: center; font-size: 13px; color: #888888;">
              <p style="margin: 0;">Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
      `,
    };

    // --- AUTO-REPLY EMAIL STRUCTURE ---
    const autoReplyMail = email
      ? {
          from: `"Gradient Holistic Wellness Lounge" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: 'We received your message! - Gradient Holictic Wellness Lounge',
          html: `
            <div style="background-color: #f8f5ee; padding: 30px 15px; font-family: 'Cormorant Garamond', serif, Arial, sans-serif; line-height: 1.6; color: #333333;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                
                <div style="background: linear-gradient(135deg, #8a1111 0%, #b91c1c 100%); padding: 35px 30px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; letter-spacing: 1px;">Message Received</h1>
                  <p style="margin: 8px 0 0; color: #ffffff; font-size: 16px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">GRADIENT HOLISTIC WELLNESS LOUNGE</p>
                </div>

                <div style="padding: 40px 30px;">
                  <p style="margin-top: 0; font-size: 17px; color: #555555;">
                    Hi ${name},
                    <br><br>
                    Thank you for contacting Gradient Holistic Wellness Lounge. We have successfully received your message and our team will review your inquiry and get back to you within 24 hours.
                  </p>

                  <div style="margin-top: 35px;">
                    <h3 style="color: #8a1111; font-size: 20px; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #b91c1c; display: inline-block; font-weight: bold;">
                      Submission Details
                    </h3>
                    <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
                      <tr>
                        <td style="width: 100px; font-weight: bold; color: #777777; vertical-align: top; font-size: 17px;">Name:</td>
                        <td style="color: #1a1a1a; font-size: 17px; font-weight: 500;">${name}</td>
                      </tr>
                      <tr>
                        <td style="width: 100px; font-weight: bold; color: #777777; vertical-align: top; font-size: 17px;">Phone:</td>
                        <td>
                          <span style="color: #1a1a1a; font-size: 17px;">${phone}</span>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div style="margin-top: 30px;">
                    <h3 style="color: #8a1111; font-size: 20px; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #b91c1c; display: inline-block; font-weight: bold;">
                      Your Message
                    </h3>
                    <div style="background-color: #fcf6ef; border-left: 4px solid #b91c1c; padding: 20px; border-radius: 4px; color: #444444; font-style: italic; font-size: 17px;">
                      "${message.replace(/\n/g, '<br>')}"
                    </div>
                  </div>

                  <div style="margin-top: 40px; text-align: center;">
                    <p style="font-size:16px; color:#555;">For urgent inquiries, please reach us directly:</p>
                    <a href="tel:+919500059260" style="background-color: #8a1111; color: #ffffff; display: inline-block; padding: 12px 25px; text-decoration: none; border-radius: 50px; font-weight: bold; text-transform: uppercase; font-size: 14px; letter-spacing: 0.5px; white-space: nowrap; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                      Call +91 95000 59260
                    </a>
                  </div>
                </div>

                <div style="background-color: #e5e5e5; padding: 20px; text-align: center; font-size: 13px; color: #888888;">
                  <p style="margin: 0;">Gradient Holistic Wellness Lounge | Hosur, Tamil Nadu</p>
                </div>
              </div>
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
    } else {
      console.error('❌ Both WhatsApp and email failed to send.');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'We were unable to send your message. Please try again later.'
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