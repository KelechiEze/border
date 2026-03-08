import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Briefcase, Monitor, Server, Mail, Target, Eye } from 'lucide-react';

const Objective = () => {
  const [activeTab, setActiveTab] = useState('Mission');

  const content = {
    Mission: {
      title: "MISSION",
      text: "To deliver professional training, creative printing, reliable travel solutions and structured business support that empower individuals and organisations to grow with confidence.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      features: ["Professional Training", "Creative Printing", "Travel Solutions", "Business Support"]
    },
    Vision: {
      title: "VISION",
      text: "To become a trusted multi service enterprise recognised for excellence in creativity, travel solutions and business empowerment across borders.",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      features: ["Trusted Enterprise", "Excellence in Creativity", "Travel Solutions", "Business Empowerment"]
    }
  };

  const activeData = content[activeTab as keyof typeof content];

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
              Objective
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-primary leading-tight">
              Strengthen Your Business <br className="hidden md:block" /> For Enduring Success.
            </h2>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-navy text-white px-8 py-4 rounded-full font-bold flex items-center justify-center shadow-lg"
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
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-navy text-white rounded-full flex items-center justify-center mb-8">
                  <activeData.icon size={40} />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                  {activeData.title}
                </h3>
                <p className="text-charcoal/60 text-lg leading-relaxed mb-8">
                  {activeData.text}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-off-white rounded-full flex items-center justify-center text-primary">
                <Mail size={18} md:size={20} />
              </div>
              <p className="text-sm md:text-base font-medium text-charcoal/60">
                Consult With Advisor? <a href="#" className="text-primary font-bold underline">Click Now</a>
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
              {["Mission", "Vision"].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 md:px-12 py-3 md:py-4 font-bold text-base md:text-lg transition-all whitespace-nowrap ${activeTab === tab ? 'bg-dark-navy text-white rounded-t-xl' : 'text-charcoal/40 hover:text-primary'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src={activeData.image} 
                    alt={activeTab} 
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <ul className="space-y-3 md:space-y-4">
                    {activeData.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm md:text-base text-charcoal/60 font-medium">
                        <span className="w-1.5 h-1.5 bg-navy rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
