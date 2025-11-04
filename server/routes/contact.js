import express from 'express';
import twilio from 'twilio';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();


// Contact route
router.post('/contact', async (req, res) => {
  try {
    const { name, phone, message, email } = req.body;


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
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, phone, and message are required'
      });
    }


    // Format the message for both WhatsApp and email
    const formattedMessage = `
New Contact Form Submission:


Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ''}
Message: ${message}


Submitted at: ${new Date().toLocaleString()}
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
      
      const messageOptions = {
        from: process.env.WHATSAPP_FROM,
        to: process.env.WHATSAPP_TO,
        body: formattedMessage
      };


      const message = await twilioClient.messages.create(messageOptions);
      whatsappSuccess = true;
      console.log('✅ WhatsApp message sent successfully');
      console.log('📱 Message SID:', message.sid);
    } catch (whatsappError) {
      console.error('❌ WhatsApp error:', {
        message: whatsappError.message,
        code: whatsappError.code,
        status: whatsappError.status,
        moreInfo: whatsappError.moreInfo
      });
    }

    // Email signature HTML template (inline CSS for email client compatibility)
    const getEmailSignature = () => {
      return `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #8b0000; font-family: Arial, sans-serif;">
          <table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 13px; color: #333;">
            <tr>
              <td style="padding-right: 20px; vertical-align: top;">
                <img src="cid:gradientlogo" alt="Gradient Logo" style="width: 100px; height: auto; display: block;" />
              </td>
              <td style="vertical-align: top; line-height: 1.6;">
                <div style="font-size: 18px; font-weight: bold; color: #8b0000; margin-bottom: 3px;">GRADIENT</div>
                <div style="font-size: 12px; color: #666; margin-bottom: 15px; letter-spacing: 1px;">HOLISTIC WELLNESS LOUNGE</div>
                <div style="font-size: 13px; color: #333; margin-bottom: 5px;">
                  <strong>Contact us:</strong> <a href="tel:9500589940" style="color: #333; text-decoration: none;">95005 89940</a>
                </div>
                <div style="font-size: 13px; margin-bottom: 5px;">
                  <a href="mailto:ceo@gradientlounge.com" style="color: #8b0000; text-decoration: none;">ceo@gradientlounge.com</a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      `;
    };

    // Initialize Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.zoho.com",
      port: process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 465,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify()
      .then(() => console.log("✅ SMTP connection verified!"))
      .catch((err) => console.error("❌ SMTP verification failed:", err));


    // Send email
    let emailSuccess = false;
    try {
      console.log("📧 Sending email...");


      // 1. Send notification email to business
      await transporter.sendMail({
        from: `"Gradient Holistic Wellness Lounge" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px;">
              <h2 style="color: #8b0000; margin-top: 0;">New Contact Form Submission</h2>
              <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #8b0000;">
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
                ${email ? `<p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>` : ''}
                <p style="margin: 15px 0 5px 0;"><strong>Message:</strong></p>
                <p style="margin: 5px 0; white-space: pre-wrap;">${message}</p>
                <p style="margin: 15px 0 0 0; font-size: 12px; color: #666;"><em>Submitted at: ${new Date().toLocaleString()}</em></p>
              </div>
              ${getEmailSignature()}
            </div>
          </body>
          </html>
        `,
        attachments: [{
          filename: 'grad_sig.png',
          path: path.join(__dirname, '../../public/grad_sig.png'),
          cid: 'gradientlogo'
        }]
      });


      // 2. Send auto-reply to user (if email provided)
      if (email) {
        console.log(`📧 Sending auto-reply email to user: ${email}`);
        await transporter.sendMail({
          from: `"Gradient Holistic Wellness Lounge" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Thank you for contacting Gradient Wellness Lounge!",
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f4f4f4;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px;">
                <h2 style="color: #8b0000; margin-top: 0;">Thank you for contacting Gradient Wellness Lounge!</h2>
                <p style="font-size: 15px; line-height: 1.6; color: #333;">Hi ${name},</p>
                <p style="font-size: 15px; line-height: 1.6; color: #333;">We received your message:</p>
                <div style="background: #f5f5f5; padding: 20px; border-left: 4px solid #8b0000; margin: 20px 0;">
                  <p style="font-style: italic; color: #555; margin: 0; white-space: pre-wrap;">"${message}"</p>
                </div>
                <p style="font-size: 15px; line-height: 1.6; color: #333;">Our team will review your inquiry and get back to you within 24 hours.</p>
                <p style="font-size: 15px; line-height: 1.6; color: #333;">If you have any urgent questions, please call us at <strong>95005 89940</strong>.</p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                <p style="color: #666; font-size: 14px; margin: 10px 0 5px 0;">Best regards,</p>
                <p style="color: #666; font-size: 14px; margin: 0;">The Gradient Holistic Wellness Lounge Team</p>
                ${getEmailSignature()}
              </div>
            </body>
            </html>
          `,
          attachments: [{
            filename: 'grad_sig.png',
            path: path.join(__dirname, '../../public/grad_sig.png'),
            cid: 'gradientlogo'
          }]
        });
        console.log(`✅ Auto-reply email sent to user: ${email}`);
      }


      emailSuccess = true;
      console.log("✅ All emails sent successfully!");
    } catch (emailError) {
      console.error("❌ Email error:", {
        message: emailError.message,
        code: emailError.code,
        response: emailError.response,
      });
    }


    // Determine response based on success
    if (whatsappSuccess && emailSuccess) {
      console.log('🎉 Both WhatsApp and email sent successfully');
      res.json({
        success: true,
        message: 'Your message has been sent successfully via WhatsApp and email'
      });
    } else if (whatsappSuccess || emailSuccess) {
      console.log(`⚠️ Partial success: ${whatsappSuccess ? 'WhatsApp' : 'Email'} sent, ${whatsappSuccess ? 'email' : 'WhatsApp'} failed`);
      res.json({
        success: true,
        message: `Your message has been sent via ${whatsappSuccess ? 'WhatsApp' : 'email'} (${whatsappSuccess ? 'email' : 'WhatsApp'} delivery failed)`
      });
    } else {
      console.log('❌ Both WhatsApp and email failed');
      res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later or contact us directly.'
      });
    }


  } catch (error) {
    console.error('🚨 Contact form error:', {
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.'
    });
  }
});


export default router;
