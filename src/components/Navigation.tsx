import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mobile viewport and hide-on-scroll behavior for About page only
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    // initialize
    handleResize();

    const handleHideOnScroll = () => {
      const current = window.scrollY;

      // Only apply hide-on-scroll on mobile AND only for the About page
      if (!isMobile || location.pathname !== '/about') {
        setIsHidden(false);
        lastScrollY.current = current;
        return;
      }

      // If mobile menu is open, keep nav visible
      if (isMobileMenuOpen) {
        setIsHidden(false);
        lastScrollY.current = current;
        return;
      }

      // Scrolling down -> hide; scrolling up -> show
      if (current > lastScrollY.current && current > 80) {
        setIsHidden(true);
      } else if (current < lastScrollY.current) {
        setIsHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleHideOnScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleHideOnScroll as EventListener);
    };
  }, [isMobileMenuOpen, isMobile, location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/experts', label: 'Experts' },
    // { path: '/testimonials', label: 'Testimonials' },
    { path: '/faq', label: 'FAQ & Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  // Determine navbar background color based on current path
  const navbarBgColor = location.pathname === '/' ? 'white' : '#f6e5cf';

  // Apply a transform when hidden on mobile; desktop and other pages unaffected
  const navStyle: React.CSSProperties = {
    backgroundColor: navbarBgColor,
    transform: isHidden ? 'translateY(-110%)' : 'translateY(0)',
    transition: 'transform 0.28s ease-in-out',
  };

  return (
    <nav className={`nav-sticky ${isScrolled ? 'scrolled' : ''}`} style={navStyle}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 min-w-0">
            <img src="/logo.png" alt="Gradient Holistic Wellness Lounge" className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0" />
            <span className="text-1xl font-bold gradient-text nav-brand-title flex-shrink" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 900 }}>
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
            className="md:hidden p-3 text-gray-800 rounded-lg hover:bg-gray-200 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                className={`nav-link-mobile ${
                  location.pathname === item.path ? 'active' : ''
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