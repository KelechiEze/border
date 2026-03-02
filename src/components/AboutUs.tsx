import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="relative">
            {/* Circular Text Badge */}
            <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-32 h-32 md:w-40 md:h-40 z-20">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-primary">
                  <textPath xlinkHref="#circlePath">Digital World • Digital World • </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-dark-navy">
                  <svg width="20" height="20" md:width="24" md:height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl mb-8 md:mb-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
                alt="Our Team" 
                className="w-full h-[350px] md:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl">
              Consumers today increasingly rely on digital channels to research products. We empower individuals and organizations through high-quality training, creative printing, and seamless travel experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded-full font-bold flex items-center justify-center shadow-lg"
              >
                More About <ArrowRight size={18} className="ml-2" />
              </motion.button>

              <div className="flex items-center">
                <div className="flex -space-x-4 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`} 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white object-cover"
                      alt="User"
                    />
                  ))}
                </div>
                <div className="border-b-2 border-navy pb-1">
                  <span className="font-bold text-primary text-sm md:text-base">10M+ Impact Across the World.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-navy text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 md:mb-8">
                About Us
              </span>
              <h2 className="text-3xl md:text-6xl font-bold text-primary mb-8 md:mb-12 leading-[1.2]">
                We Provide Brilliant Idea <br className="hidden md:block" />
                To Grow The <span className="font-light italic">Consulting</span> <br className="hidden md:block" />
                Agency <span className="font-black">Your Sharp Brand</span>
              </h2>

              <div className="relative h-[300px] md:h-[400px] mt-12 md:mt-20">
                {/* Overlapping Circles */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="absolute left-0 top-0 w-48 h-48 md:w-72 md:h-72 rounded-full border border-charcoal/10 flex flex-col items-center justify-center text-center p-4 md:p-8 bg-white/50 backdrop-blur-sm z-10 shadow-sm"
                >
                  <span className="text-4xl md:text-7xl font-bold text-primary mb-1 md:mb-2">15<span className="text-accent">+</span></span>
                  <p className="text-charcoal/60 font-medium text-xs md:text-base">Experience Team <br /> Help you</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="absolute left-24 md:left-40 top-8 md:top-12 w-48 h-48 md:w-72 md:h-72 rounded-full border border-charcoal/10 flex flex-col items-center justify-center text-center p-4 md:p-8 bg-white/50 backdrop-blur-sm shadow-sm"
                >
                  <span className="text-4xl md:text-7xl font-bold text-primary mb-1 md:mb-2">18<span className="text-accent">M</span></span>
                  <p className="text-charcoal/60 font-medium text-xs md:text-base">We helped to get <br /> companies</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
