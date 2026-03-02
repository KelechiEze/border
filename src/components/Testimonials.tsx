import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-teal overflow-hidden relative">
      {/* Background Wireframe Decoration */}
      <div className="absolute right-0 top-0 w-1/2 md:w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <circle cx="100" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-lime text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 md:mb-8">
              Testimonial
            </span>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-12 gap-6">
              <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight">
                What Our Customers <br className="hidden md:block" /> Say <span className="font-light text-white/60">About Us</span>
              </h2>
              <div className="flex gap-4">
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-lime hover:text-primary transition-all">
                  <ChevronLeft size={20} md:size={24} />
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-lime hover:text-primary transition-all">
                  <ChevronRight size={20} md:size={24} />
                </button>
              </div>
            </div>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 md:mb-12 italic">
              Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out journey, and marvel at the view experience the world, not to notice
            </p>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-white/10 pt-8 md:pt-12">
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white">Robert J. Hare<span className="text-white/40 font-normal text-base md:text-lg ml-2">/Business Owner</span></h4>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 flex items-center gap-4 md:gap-6">
                <div className="text-lime">
                  <Star size={32} md:size={40} fill="currentColor" />
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} md:size={16} className="text-lime" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-white font-bold text-sm md:text-base">4.3 <span className="text-white/40 font-normal">score, 47 reviews</span></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden bg-white/10 p-3 md:p-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                alt="Testimonial Author" 
                className="w-full h-[400px] md:h-[600px] object-cover rounded-[24px] md:rounded-[40px]"
              />
              
              {/* Quote Badge */}
              <div className="absolute top-10 md:top-20 -right-4 md:-right-8 w-16 h-16 md:w-20 md:h-20 bg-lime rounded-full flex items-center justify-center text-primary shadow-xl">
                <Quote size={24} md:size={32} fill="currentColor" />
              </div>

              {/* Banner Overlay */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-6 md:bottom-12 -left-6 md:-left-12 bg-lime px-6 md:px-12 py-4 md:py-8 rounded-[24px] md:rounded-[32px] shadow-2xl rotate-[-5deg]"
              >
                <h3 className="text-2xl md:text-4xl font-black text-primary">"Awesome Work"</h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
