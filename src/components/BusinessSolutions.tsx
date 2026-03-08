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
            <span className="inline-block bg-navy text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
              Services
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-primary leading-tight">
              Empower Your Business <br className="hidden md:block" /> To Succeed & Grow.
            </h2>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-dark-navy text-white px-8 py-4 rounded-full font-bold flex items-center justify-center shadow-lg"
          >
            More Services <ArrowRight size={18} className="ml-2" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-[24px] md:rounded-[32px] shadow-sm border border-charcoal/5 overflow-hidden">
          {[
            { 
              title: "Training and Development", 
              icon: Users, 
              items: [
                "Creative skills training",
                "Sublimation and Heat Press Mastery",
                "Digital Design Training",
                "Branding & Business Workshops",
                "Small Business Development Support"
              ]
            },
            { 
              title: "Printing and Designing", 
              icon: Megaphone, 
              items: [
                "Custom Apparel Printing",
                "Corporate Branding Materials",
                "Promotional Merchandise",
                "Event and Celebration Printing",
                "Graphic Design Services"
              ]
            },
            { 
              title: "RB Borders Travels", 
              icon: TrendingUp, 
              items: [
                "Local and International Flight Bookings",
                "Hotel Reservations Worldwide",
                "Holiday Packages",
                "Private and Group Hajj Packages",
                "Private and Group Umrah Packages",
                "Travel Advisory and Support"
              ]
            }
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
              
              <div className="relative z-10 w-full">
                <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white mb-8 mx-auto shadow-inner">
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">{item.title}</h3>
                <ul className="text-charcoal/60 mb-10 space-y-2 text-sm text-left max-w-xs mx-auto">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-2 shrink-0" />
                      {listItem}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 rounded-full border border-charcoal/10 font-bold text-primary hover:bg-navy hover:border-navy hover:text-white transition-all"
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
