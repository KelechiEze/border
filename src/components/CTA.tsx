import React from 'react';
import { motion } from 'motion/react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[32px] md:rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 md:w-40 h-32 md:h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Ready to Grow Your <br className="hidden md:block" /> Brand Beyond Borders?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto">
              Join hundreds of successful businesses and individuals who have transformed their future with our expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-primary px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold shadow-xl"
              >
                Contact Us Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
