import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Megaphone, TrendingUp } from 'lucide-react';

const BusinessSolutions = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F9F8F6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-lime text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
              Services
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-primary leading-tight">
              Empower Your Business <br className="hidden md:block" /> To Succeed & Grow.
            </h2>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-dark-teal text-white px-8 py-4 rounded-full font-bold flex items-center justify-center shadow-lg"
          >
            More Services <ArrowRight size={18} className="ml-2" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-[24px] md:rounded-[32px] shadow-sm border border-charcoal/5 overflow-hidden">
          {[
            { title: "Business Planning", icon: Users, desc: "Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi designer Lorem is Ipsum is" },
            { title: "Marketing & Branding", icon: Megaphone, desc: "Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi designer Lorem is Ipsum is" },
            { title: "Sales Consulting", icon: TrendingUp, desc: "Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi designer Lorem is Ipsum is" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 md:p-12 text-center flex flex-col items-center relative group ${i !== 2 ? 'md:border-r border-b md:border-b-0 border-charcoal/5' : ''}`}
            >
              {/* Grid Pattern Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-lime rounded-full flex items-center justify-center text-primary mb-8 mx-auto shadow-inner">
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">{item.title}</h3>
                <p className="text-charcoal/50 mb-10 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 rounded-full border border-charcoal/10 font-bold text-primary hover:bg-lime hover:border-lime transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
