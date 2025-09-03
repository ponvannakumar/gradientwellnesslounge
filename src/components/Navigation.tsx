import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/menu', label: 'Menu' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/faq', label: 'FAQ & Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`nav-sticky ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Gradient Holistic Wellness Lounge" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold gradient-text">
              Gradient Holistic Wellness Lounge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
          <div className="flex flex-col py-6 px-4">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link mx-4 my-2 py-3 px-4 rounded-lg transition-all duration-300 min-h-[44px] flex items-center ${
                  location.pathname === item.path ? 'active bg-red-600' : 'hover:bg-white hover:bg-opacity-10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;