import React from 'react';
import { motion } from 'motion/react';
import { Users, ClipboardCheck, Award, Handshake } from 'lucide-react';

const FunFacts = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-[32px] md:rounded-[48px] p-8 md:p-20 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12"
        >
          {[
            { label: "Team member", value: "150+", icon: Users },
            { label: "Complete project", value: "150k+", icon: ClipboardCheck },
            { label: "Winning award", value: "100+", icon: Award },
            { label: "Client review", value: "120k+", icon: Handshake }
          ].map((fact, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 min-w-[140px]">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-white shrink-0">
                <fact.icon size={24} md:size={32} />
              </div>
              <div>
                <h3 className="text-2xl md:text-5xl font-black text-white mb-0.5 md:mb-1">{fact.value}</h3>
                <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] md:text-xs">{fact.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FunFacts;
