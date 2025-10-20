import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRouter from "./routes/contact.js";
import multer from 'multer';
import path from 'path';



// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = [
  'TWILIO_SID',
  'TWILIO_AUTH', 
  'WHATSAPP_FROM',
  'WHATSAPP_TO',
  'EMAIL_USER',
  'EMAIL_PASS'
];

const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

// if (missingEnvVars.length > 0) {
//   console.error('❌ Missing required environment variables:');
//   missingEnvVars.forEach(varName => {
//     console.error(`   - ${varName}`);
//   });
//   console.error('\n💡 Please check your .env file and ensure all required variables are set.');
//   console.error('📖 See server/README.md for setup instructions.');
//   process.exit(1);
// }


console.log('✅ All required environment variables are set');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Middleware
app.use('/uploads', express.static('uploads')); // Serve static files from the 'uploads' directory

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', contactRouter);



// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('🚨 Server Error:', {
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });
  
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const server = app.listen(PORT, () => {
  console.log('🚀 Gradient Wellness Backend Server Started!');
  console.log(`📍 Server running on: http://localhost:${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`📧 Contact API: http://localhost:${PORT}/api/contact`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('🚨 Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('🚨 Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
