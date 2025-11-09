import React from 'react';
import { Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {

  // NUCLEAR OPTION: Pure JavaScript forced open
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Stop any parent elements from interfering
    e.preventDefault();
    e.stopPropagation();

    // 2. The exact, clean URL with Country Code (91) + Number (9500059260)
    const finalUrl = 'https://wa.me/919500059260';

    // 3. Force open in new tab using standard JS window api
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-black bg-opacity-80 border-t border-gray-800 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
             {/* Logo and Description */}
             <div>
               <div className="flex items-center gap-3 mb-4">
                 <img src="/favicon.jpg" alt="Gradient Holistic Wellness Lounge" className="w-6 h-6 object-contain" />
                 <span className="text-lg font-bold gradient-text">
                   Gradient Holistic Wellness Lounge
                 </span>
               </div>
               <p className="text-gray-400 leading-relaxed">
                 Your premier destination for comprehensive wellness solutions, 
                 combining fitness training, nutrition coaching, and stress management 
                 in a luxury facility.
               </p>
             </div>

             {/* Quick Links */}
             <div>
               <h3 className="text-white font-semibold mb-4">Quick Links</h3>
               <div className="space-y-2">
                 <a href="/" className="block text-gray-400 hover:text-pink-400 transition-colors">Home</a>
                 <a href="/about" className="block text-gray-400 hover:text-pink-400 transition-colors">About Us</a>
                 <a href="/services" className="block text-gray-400 hover:text-pink-400 transition-colors">Services</a>
                 <a href="/contact" className="block text-gray-400 hover:text-pink-400 transition-colors">Contact</a>
               </div>
             </div>

             {/* Contact Info */}
             <div>
               <h3 className="text-white font-semibold mb-4">Contact</h3>
               <div className="space-y-2 text-gray-400">
                 <p>12th cross street, MIG 229</p>
                 <p> 100 Feet Rd, New ASTC Hudco</p>
                 <p> Hosur, Tamil Nadu 635109</p>
                 <p>Phone: (+91) 95000 59260 </p>
                 <p>Email: ceo@gradientlounge.com</p>
               </div>
             </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            
            {/* Instagram */}
            <a
                href="https://www.instagram.com/thegradientlounge?igsh=MXA5b3N2YmJpN2E1YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white md:bg-gray-800 md:text-gray-400 bg-gradient-to-r from-pink-500 to-purple-500 instagram-hover transition-all duration-300"
            >
                <Instagram size={18} />
            </a>

            {/* YouTube */}
            <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white md:bg-gray-800 md:text-gray-400 bg-red-600 md:hover:bg-red-600 transition-all duration-300"
            >
                <Youtube size={18} />
            </a>

            {/* LinkedIn */}
            <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white md:bg-gray-800 md:text-gray-400 bg-blue-600 md:hover:bg-blue-600 transition-all duration-300"
            >
                <Linkedin size={18} />
            </a>

             {/* WhatsApp - USING SPECIAL CLICK HANDLER */}
             <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white md:bg-gray-800 md:text-gray-400 bg-green-600 md:hover:bg-green-600 transition-all duration-300 cursor-pointer"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={18} />
            </button>

          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Gradient Holistic Wellness Lounge | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
