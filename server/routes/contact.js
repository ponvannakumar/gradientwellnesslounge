const twilio = require('twilio');
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method not allowed' })
    };
  }

  try {
    const { name, phone, message, email } = JSON.parse(event.body);

    if (!name || !phone || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Missing required fields'
        })
      };
    }

    const formattedMessage = `
New Contact Form Submission:
Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ''}
Message: ${message}
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim();

    // Twilio WhatsApp
    let whatsappSuccess = false;
    try {
      const twilioClient = twilio(
        process.env.TWILIO_SID,
        process.env.TWILIO_AUTH
      );
      
      await twilioClient.messages.create({
        from: process.env.WHATSAPP_FROM,
        to: process.env.WHATSAPP_TO,
        body: formattedMessage
      });
      whatsappSuccess = true;
      console.log('✅ WhatsApp sent');
    } catch (error) {
      console.error('❌ WhatsApp error:', error.message);
    }

    // Email
    let emailSuccess = false;
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.zoho.com",
        port: parseInt(process.env.EMAIL_PORT) || 465,
        secure: process.env.EMAIL_SECURE !== "false",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Gradient Wellness" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New Contact from ${name}`,
        html: `
          <h2>New Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      });

      if (email) {
        await transporter.sendMail({
          from: `"Gradient Wellness" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Thank you for contacting us!",
          html: `
            <p>Hi ${name},</p>
            <p>We received your message and will respond within 24 hours.</p>
            <p>Best regards,<br>Gradient Wellness Team</p>
          `
        });
      }

      emailSuccess = true;
      console.log('✅ Email sent');
    } catch (error) {
      console.error('❌ Email error:', error.message);
    }

    if (whatsappSuccess || emailSuccess) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Message sent successfully!'
        })
      };
    } else {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Failed to send message'
        })
      };
    }

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Server error'
      })
    };
  }
};