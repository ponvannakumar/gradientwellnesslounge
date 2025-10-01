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
        <div className="flex items-center justify-between gap-3">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-1.5 min-w-0 flex-1 pr-2">
          <img
          src="/logo.png"
          alt="Gradient Holistic Wellness Lounge"
          className="h-12 w-auto sm:h-14 md:h-16 object-contain"
          />

            <span
              className="inline block text-sm sm:text-base md:text-1xl font-bold gradient-text leading-tight overflow-visible break-words"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 900,
                fontSize: '1.25rem',
                lineHeight: 1.2,
              }}
            >
              Gradient Holistic Wellness Lounge
            </span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${location.pathname === item.path
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-gray-800 hover:bg-gray-100'} px-3 py-2 rounded-full text-sm font-medium transition-colors`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 ml-auto shrink-0 text-gray-800 rounded-lg hover:bg-gray-200 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-red-600/90 text-white'
                    : 'text-gray-100 hover:bg-white/10'
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
