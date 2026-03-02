import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const TeamMembers = () => {
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
              Team Member
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-primary leading-tight">
              The Visionaries Driving <br className="hidden md:block" /> Our Success
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { name: "Ronald Richards", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
            { name: "Marvin McKinney", role: "Senior Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
            { name: "Kathryn Murphy", role: "Web Designer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
            { name: "Dianne Russell", role: "Junior Manager", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-4 md:mb-6 rounded-[24px] md:rounded-[32px] overflow-hidden aspect-square">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-1">{member.name}</h4>
              <p className="text-charcoal/50 font-medium text-sm md:text-base">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
