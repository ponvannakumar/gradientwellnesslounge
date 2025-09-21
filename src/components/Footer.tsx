import React from 'react';
import { Instagram, Facebook, Linkedin, MessageCircle, Activity } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-black bg-opacity-80 border-t border-gray-800 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/favicon.png" alt="Gradient Holistic Wellness Lounge" className="w-6 h-6 object-contain" />
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
              <p>123 Wellness Street</p>
              <p>Health City, HC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@gradientwellness.com</p>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
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