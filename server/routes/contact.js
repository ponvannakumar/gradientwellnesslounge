import express from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

//Contact route
router.post('/contact', upload.single('audio'), async (req, res) => {
    try {
        const { name, phone, message, email } = req.body;
        const audioFile = req.file;

        console.log('📨 New contact form submission:', {
            name: name ? '✓' : '✗',
            phone: phone ? '✓' : '✗',
            email: email ? `✓ (${email})` : '✗',
            message: message ? '✓' : '✗',
            audio: audioFile ? '✓' : '✗',
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

        // Format the message for email
        let formattedMessage = `
New Contact Form Submission:

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ''}
Message: ${message}
`;

        // Include audio link if available
        let audioLink = '';
        if (audioFile) {
            audioLink = `${req.protocol}://${req.get('host')}/uploads/${audioFile.filename}`;
            formattedMessage += `\nAudio: ${audioLink}`;
        }

        formattedMessage += `\nSubmitted at: ${new Date().toLocaleString()}`.trim();

        // Initialize Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Send email
        let emailSuccess = false;
        try {
            console.log('📧 Sending email...');

            // 1. Send notification email to business
            let htmlMessage = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `;

            if (audioFile) {
                htmlMessage += `<p><strong>Audio:</strong> <a href="${audioLink}">${audioLink}</a></p>`;
            }

            htmlMessage += `<p><em>Submitted at: ${new Date().toLocaleString()}</em></p>`;

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Send to business
                subject: `New Contact Form Submission from ${name}`,
                text: formattedMessage,
                html: htmlMessage
            });

            // 2. Send auto-reply to user (if email provided)
            if (email) {
                console.log(`📧 Sending auto-reply email to user: ${email}`);
                await transporter.sendMail({
                    from: `"Gradient Wellness Lounge" <${process.env.EMAIL_USER}>`,
                    to: email,
                    subject: "Thank you for contacting Gradient Wellness Lounge!",
                    text: `Hi ${name},\n\nThank you for reaching out to Gradient Wellness Lounge! We received your message:\n\n"${message}"\n\nOur team will review your inquiry and get back to you within 24 hours.\n\n${audioFile ? `You can listen to your audio here: ${audioLink}\n\n` : ''}If you have any urgent questions, please call us at (555) 123-4567.\n\nBest regards,\nThe Gradient Wellness Team`,
                    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #8b0000;">Thank you for contacting Gradient Wellness Lounge!</h2>
              <p>Hi ${name},</p>
              <p>Thank you for reaching out to Gradient Wellness Lounge! We received your message:</p>
              <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #8b0000; margin: 20px 0;">
                <p style="font-style: italic;">"${message}"</p>
              </div>
              ${audioFile ? `<p>You can listen to your audio here: <a href="${audioLink}">${audioLink}</a></p>` : ''}
              <p>Our team will review your inquiry and get back to you within 24 hours.</p>
              <p>If you have any urgent questions, please call us at <strong>(555) 123-4567</strong>.</p>
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
              <p style="color: #666;">Best regards,<br>The Gradient Wellness Team</p>
            </div>
          `
                });
                console.log(`✅ Auto-reply email sent to user: ${email}`);
            }

            emailSuccess = true;
            console.log('✅ Email sent successfully');
        } catch (emailError) {
            console.error('❌ Email error:', {
                message: emailError.message,
                code: emailError.code,
                response: emailError.response
            });
        }

        // Determine response based on success
        if (emailSuccess) {
            console.log('🎉 Email sent successfully');
            res.json({
                success: true,
                message: 'Your message has been sent successfully via email'
            });
        } else {
            console.log('❌ Email failed');
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
