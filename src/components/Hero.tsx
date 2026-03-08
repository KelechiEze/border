import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Play, ArrowRight } from 'lucide-react';
import { heroImages } from '../constants';

const Hero = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 md:px-6 pb-12 md:pb-20">
      <div className="hero-container h-[70vh] md:h-[85vh] bg-dark-navy relative overflow-hidden rounded-[32px] md:rounded-[48px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentHeroImage}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              scale: { duration: 7, ease: "linear" },
              opacity: { duration: 1 }
            }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={heroImages[currentHeroImage]} 
              alt="Hero Background" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Floating Icons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-r-lg shadow-lg hidden lg:block">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-red-500 via-yellow-500 to-blue-500" />
        </div>

        <div className="relative z-30 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center pb-12 md:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-8"
          >
            <svg width="32" height="32" md:width="40" md:height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-60">
              <path d="M10 30C10 30 15 25 15 15C15 5 25 5 25 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M20 10L25 5L20 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-[1.2] md:leading-[1.1]">
              RAISING STANDARDS. <br className="hidden sm:block" />
              EXPANDING OPPORTUNITIES. <br className="hidden sm:block" />
              CONNECTING BORDERS.
            </h1>
            
            <p className="text-base md:text-xl text-white/70 max-w-2xl mb-8 md:mb-12 font-medium">
              Your trusted partner for Training, Creative Printing, and Travel Solutions.
              Discover cutting-edge solutions before they become mainstream.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-navy text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold transition-all flex items-center justify-center shadow-xl"
              >
                Get Started <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
