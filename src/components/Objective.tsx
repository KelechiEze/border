import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Monitor, Server, Mail, Play } from 'lucide-react';

const Objective = () => {
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
              Objective
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-primary leading-tight">
              Strengthen Your Business <br className="hidden md:block" /> For Enduring Success.
            </h2>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-lime text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center shadow-lg"
          >
            Get Started <ArrowRight size={18} className="ml-2" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-12 rounded-[24px] md:rounded-[32px] shadow-sm border border-charcoal/5"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 md:mb-12 leading-tight">
              The Best IT & Technology Agency to <br className="hidden md:block" /> Accelerate Your Business
            </h3>
            
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-12">
              {[
                { label: "Corporate", icon: Briefcase },
                { label: "Business IT", icon: Monitor },
                { label: "Server Hosting", icon: Server }
              ].map((item, i) => (
                <div key={i} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-off-white rounded-full flex items-center justify-center text-primary mb-3 md:mb-4 mx-auto group-hover:bg-lime transition-colors">
                    <item.icon size={24} md:size={32} strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-primary text-[10px] md:text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-off-white rounded-full flex items-center justify-center text-primary">
                <Mail size={18} md:size={20} />
              </div>
              <p className="text-sm md:text-base font-medium text-charcoal/60">
                Consult With It Advisor? <a href="#" className="text-primary font-bold underline">Click Now</a>
              </p>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 md:p-12 rounded-[24px] md:rounded-[32px] shadow-sm border border-charcoal/5"
          >
            <div className="flex border-b border-charcoal/5 mb-8 overflow-x-auto scrollbar-hide">
              {["About", "Mission", "Vision"].map((tab, i) => (
                <button 
                  key={i}
                  className={`px-6 md:px-8 py-3 md:py-4 font-bold text-base md:text-lg transition-all whitespace-nowrap ${i === 0 ? 'bg-dark-teal text-white rounded-t-xl' : 'text-charcoal/40 hover:text-primary'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
                  alt="Team Working" 
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-dark-teal rounded-full flex items-center justify-center text-white shadow-lg">
                    <Play size={16} md:size={20} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <ul className="space-y-3 md:space-y-4">
                  {["Technology Growth", "Customer Oriented Program", "Dedicated Team member", "Customer Oriented Program"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm md:text-base text-charcoal/60 font-medium">
                      <span className="w-1.5 h-1.5 bg-lime rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-primary">Project Score</span>
                <span className="font-bold text-primary">75%</span>
              </div>
              <div className="w-full h-1.5 bg-off-white rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-lime" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
