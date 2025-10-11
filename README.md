# 🏥 Gradient Wellness Lounge

A modern wellness website with separate frontend and backend architecture.

## 🏗️ **Project Structure**

This project is split into two independent parts:

### 📱 **Frontend (React + Vite)**
- Modern React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Framer Motion for animations
- GSAP for advanced animations

### 🚀 **Backend (Node.js + Express)**
- Express.js API server
- WhatsApp integration via Twilio
- Email notifications via Nodemailer
- Contact form processing

## 🚀 **Quick Start**

### **Frontend Development**
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Runs on: http://localhost:5173
```

### **Backend Development**
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Set up environment variables
cp env.example .env
# Edit .env with your credentials

# Start backend server
npm start
# Runs on: http://localhost:3001
```

## 📋 **Available Scripts**

### **Frontend Scripts:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### **Backend Scripts:**
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-restart
- `npm test` - Test contact API
- `npm run debug:whatsapp` - Debug WhatsApp integration

## 🔗 **API Endpoints**

- `GET /health` - Server health check
- `POST /api/contact` - Submit contact form

## 📚 **Documentation**

- [Project Structure](PROJECT_STRUCTURE.md) - Detailed project organization
- [Backend Setup](server/README.md) - Backend configuration
- [WhatsApp Setup](server/WHATSAPP_SETUP.md) - WhatsApp integration
- [Debug Guide](server/WHATSAPP_DEBUG.md) - Troubleshooting

## 🛠️ **Technologies Used**

### **Frontend:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- Lucide React

### **Backend:**
- Node.js
- Express.js
- Twilio (WhatsApp)
- Nodemailer (Email)
- CORS
- dotenv

## 🚀 **Deployment**

### **Frontend:**
Deploy to Vercel, Netlify, or any static hosting service.

### **Backend:**
Deploy to Railway, Heroku, DigitalOcean, or any Node.js hosting service.

---

**Both frontend and backend are completely independent and can be developed/deployed separately!** 🎉
