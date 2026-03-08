import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[600px] md:min-h-[700px]">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 bg-dark-navy p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-navy text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 md:mb-8">
            RB Borders Travels
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Explore The World <br className="hidden md:block" /> With <span className="font-light italic text-accent">Confidence</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-8 md:mb-12 leading-relaxed max-w-xl">
            From spiritual journeys to luxury escapes, we provide seamless travel solutions tailored to your needs. Our expert advisory ensures every trip is memorable and stress-free.
          </p>
          
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-white font-bold text-sm md:text-base">Global Flight & Hotel Reservations.</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-white font-bold text-sm md:text-base">Premium Hajj & Umrah Packages.</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-accent text-primary px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold shadow-xl flex items-center justify-center"
          >
            Click Here To Join <ArrowRight size={18} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>

      {/* Right Images Grid */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 h-[400px] md:h-auto">
        <div className="h-full">
          <img src="https://images.unsplash.com/photo-1517713982677-4b66332f98de?auto=format&fit=crop&w=600&q=80" className="w-full h-1/2 object-cover border-b border-r border-white/5" alt="Travel 1" />
          <img src="https://kelechieze.wordpress.com/wp-content/uploads/2026/03/lookhere.png" className="w-full h-1/2 object-cover border-r border-white/5" alt="Travel 2" />
        </div>
        <div className="h-full">
          <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80" className="w-full h-1/2 object-cover border-b border-white/5" alt="Travel 3" />
          <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80" className="w-full h-1/2 object-cover" alt="Travel 4" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
