import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { logoUrl } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when resizing from mobile to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', hasDropdown: false },
    { name: 'Services', hasDropdown: false },
    { name: 'About', hasDropdown: false },
    { name: 'Travels', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  return (
    <header className="py-4 md:py-6 px-4 md:px-10 flex items-center justify-between relative z-50 bg-white">
      {/* Logo on left for all screens */}
      <div className="flex items-center space-x-3">
        <img 
          src={logoUrl} 
          alt="RB Borders Logo" 
          className="h-10 md:h-14 w-auto rounded-lg shadow-md border border-charcoal/5"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Desktop Navigation - Only visible on 768px and above */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href="#" 
            className="text-sm font-semibold text-primary hover:text-lime transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Desktop Contact Info - Only visible on 768px and above */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-lime rounded-full flex items-center justify-center mr-3">
            <Phone size={18} className="text-primary" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-charcoal/60 tracking-widest">Phone:</p>
            <p className="text-sm font-bold text-primary">07950 952103</p>
          </div>
        </div>
        <a href="#" className="text-sm font-bold text-primary flex items-center group">
          Get A Quote <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Hamburger Menu Button - Only visible below 768px */}
      <button 
        className="md:hidden p-2 text-primary hover:bg-charcoal/5 rounded-full transition-colors z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu Overlay - Only visible below 768px */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel - Slide from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 p-8 flex flex-col md:hidden"
            >
              {/* Close button at top */}
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-primary hover:bg-charcoal/5 rounded-full transition-colors"
                >
                  <X size={32} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-6 mb-12">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href="#" 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-2xl font-bold text-primary hover:text-lime transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Phone Number */}
              <div className="mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center mr-4">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-charcoal/60 tracking-widest">Call Us:</p>
                    <p className="text-lg font-bold text-primary">07950 952103</p>
                  </div>
                </div>
              </div>

              {/* Get A Quote Button */}
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center shadow-xl hover:bg-dark-teal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get A Quote <ArrowRight size={20} className="ml-2 text-lime" />
              </motion.a>

              {/* Optional: Add some spacing at bottom */}
              <div className="mt-8 text-center text-sm text-charcoal/40">
                © 2024 RB Borders
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;