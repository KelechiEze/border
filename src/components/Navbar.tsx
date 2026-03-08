import React, { useState } from 'react';
import { ChevronDown, Phone, ArrowRight, Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { logoUrl } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', hasDropdown: true },
    { name: 'Services', hasDropdown: true },
    { name: 'About', hasDropdown: true },
    { name: 'Travels', hasDropdown: true },
    { name: 'Contact', hasDropdown: false },
  ];

  return (
    <header className="py-3 md:py-4 px-4 md:px-10 flex items-center justify-between relative z-50">
      {/* Logo - Reduced size */}
      <div className="flex items-center space-x-2">
        <img 
          src={logoUrl} 
          alt="RB Borders Logo" 
          className="h-10 md:h-14 w-auto rounded-lg shadow-sm border border-charcoal/5"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-lg md:text-xl font-bold tracking-tight text-primary">RB</span>
          <span className="text-lg md:text-xl font-bold tracking-tight text-primary">Borders</span>
        </div>
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:flex nav-pill mx-4">
        {navLinks.map((link) => (
          <a key={link.name} href="#" className="flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
            {link.name} {link.hasDropdown && <ChevronDown size={14} className="ml-1" />}
          </a>
        ))}
      </nav>

      {/* Desktop Actions - Hidden on mobile */}
      <div className="hidden md:flex items-center space-x-4 mr-4">
        <button className="p-2 text-primary hover:bg-charcoal/5 rounded-full transition-colors relative">
          <ShoppingCart size={22} />
          <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center mr-3">
            <Phone size={18} className="text-white" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-charcoal/60 tracking-widest">Phone:</p>
            <p className="text-sm font-bold text-primary">07950 952103</p>
          </div>
        </div>
        <a href="#" className="bg-primary text-white px-6 py-3 rounded-full text-sm font-bold flex items-center hover:bg-dark-navy transition-all shadow-md">
          Get A Quote <ArrowRight size={14} className="ml-2 text-navy-light" />
        </a>
      </div>

      {/* Mobile Hamburger Menu Button - Visible only on mobile */}
      <button 
        className="md:hidden p-2 text-primary hover:bg-charcoal/5 rounded-full transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay - Only visible on mobile when open */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel - Slides from right, only on mobile */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col md:hidden"
            >
              {/* Close button at top of menu */}
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-primary hover:bg-charcoal/5 rounded-full transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-5 mb-8">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href="#" 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-2xl font-bold text-primary flex items-center justify-between group hover:text-navy-light transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name} 
                    {link.hasDropdown ? (
                      <ChevronDown size={22} className="group-hover:translate-y-1 transition-transform" />
                    ) : (
                      <ArrowRight size={22} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    )}
                  </motion.a>
                ))}
              </nav>

              {/* Cart, Phone, and CTA */}
              <div className="mt-auto pt-6 border-t border-charcoal/10">
                {/* Cart and Phone Row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Phone */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-3">
                      <Phone size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-charcoal/60 tracking-widest">Call Us:</p>
                      <p className="text-base font-bold text-primary">07950 952103</p>
                    </div>
                  </div>
                  
                  {/* Cart */}
                  <button className="p-3 text-primary bg-charcoal/5 rounded-full relative">
                    <ShoppingCart size={24} />
                    <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
                  </button>
                </div>
                
                {/* CTA Button */}
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-white px-6 py-4 rounded-full font-bold flex items-center justify-center shadow-lg hover:bg-dark-navy transition-colors"
                >
                  Get A Quote <ArrowRight size={18} className="ml-2 text-navy-light" />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;