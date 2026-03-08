import React from 'react';
import { motion } from 'motion/react';

const Partners = () => {
  const partners = [
    "Nike", "Adidas", "Puma", "Reebok", "Under Armour", "New Balance", 
    "Nike", "Adidas", "Puma", "Reebok", "Under Armour", "New Balance"
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F9F8F6] overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-navy text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
              Trusted By Global Brands
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap"
        >
          {partners.map((partner, i) => (
            <div 
              key={i} 
              className="mx-8 md:mx-16 text-4xl md:text-7xl font-black text-primary/10 hover:text-accent transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
