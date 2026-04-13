import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Heart } from 'lucide-react';

const Header = ({ clinicName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/', hash: '#about' },
    { name: 'Services', path: '/', hash: '#services' },
    { name: 'Our Team', path: '/', hash: '#doctors' },
    { name: 'Shop', path: '/', hash: '#shop' },
    { name: 'Contact', path: '/', hash: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      {/* Top bar (Hidden on scroll or mobile) */}
      {!scrolled && (
        <div className="hidden lg:flex bg-primary/10 py-1 px-8 justify-between text-xs font-medium text-primary-dark">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12}/> Pune, Maharashtra</span>
            <span className="flex items-center gap-1"><Phone size={12}/> +91 8600584199</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart size={12} fill="currentColor"/> 24/7 Support for Emergencies
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
            <Heart size={24} fill="white" />
          </div>
          <span className={`text-xl lg:text-2xl font-black tracking-tighter ${
            scrolled ? 'text-gray-900' : 'text-gray-900'
          }`}>
            {clinicName?.split(' ')[0]} <span className="text-primary font-bold">HOPE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.hash || link.path}
              className="text-sm font-bold text-gray-700 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-gray-900" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-fade-in-down border-t border-gray-100">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.hash || link.path}
                className="text-lg font-bold text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
