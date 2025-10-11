# Gradient Wellness Backend Server

This is a standalone Node.js + Express backend server that provides a `/contact` API endpoint for the Gradient Wellness Lounge website. It accepts form data and sends messages via WhatsApp and email.

## Quick Start

### 1. Navigate to Server Directory
```bash
cd server
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Copy `env.example` to `.env` and fill in your credentials:

```bash
cp env.example .env
```

### 4. Twilio WhatsApp Setup
1. Sign up for a Twilio account at https://www.twilio.com
2. Get your Account SID and Auth Token from the Twilio Console
3. Set up WhatsApp Sandbox:
   - Go to Console > Develop > Messaging > Try it out > Send a WhatsApp message
   - Follow the instructions to connect your WhatsApp number to the sandbox
   - Use the sandbox number provided by Twilio (usually `whatsapp:+14155238886`)

### 5. Gmail SMTP Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
   - Use this password in your `.env` file

### 6. Environment Variables Configuration
Update your `.env` file with the following:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Twilio WhatsApp Configuration
TWILIO_SID=your_actual_twilio_sid
TWILIO_AUTH=your_actual_twilio_auth_token
WHATSAPP_FROM=whatsapp:+14155238886
WHATSAPP_TO=whatsapp:+your_phone_number

# Gmail SMTP Configuration
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

### 7. Running the Server
```bash
# Production
npm start

# Development with auto-restart
npm run dev
```

## API Endpoints

### POST /api/contact
Accepts form data with the following fields:
- `name` (required): Contact's name
- `phone` (required): Contact's phone number
- `message` (required): Contact's message

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully via WhatsApp and email"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Missing required fields: name, phone, and message are required"
}
```

## Features

- ✅ Form validation
- ✅ WhatsApp message sending via Twilio
- ✅ Email sending via Nodemailer with Gmail SMTP
- ✅ Proper error handling
- ✅ ES modules support
- ✅ CORS enabled
- ✅ Environment variable configuration
- ✅ Graceful fallback if one service fails

## Testing

You can test the API using curl:

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phone": "+1234567890",
    "message": "Hello, I would like to know more about your services."
  }'
```
