import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const ConsultingBanner = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-dark-navy">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80" 
          alt="Consulting Background" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-navy via-dark-navy/80 to-transparent" />
      </div>

      {/* Wireframe Globe Decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 md:w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <circle cx="0" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <ellipse cx="0" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <ellipse cx="0" cy="50" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-navy text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 md:mb-8">
            Consulting
          </span>
          <h2 className="text-3xl md:text-7xl font-bold text-white mb-8 md:mb-12 leading-tight">
            The Future Of Corporate And <br className="hidden md:block" /> Business Solutions
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/5 text-white border border-white/20 px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold backdrop-blur-sm flex items-center justify-center"
            >
              Discover More <ArrowRight size={18} className="ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-primary px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold shadow-xl flex items-center justify-center"
            >
              Get A Quote <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingBanner;
