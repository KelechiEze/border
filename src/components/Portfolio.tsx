import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { images } from '../constants';

const Portfolio = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-navy/20 text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Explore Our Recent <br className="hidden md:block" /> Completed Projects
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            {["All", "Training", "Printing", "Travels"].map((tab, i) => (
              <button 
                key={i}
                className={`px-5 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-off-white text-primary hover:bg-navy hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Corporate Leadership Summit", cat: "Training", img: images[0] },
            { title: "Custom Team Apparel", cat: "Printing", img: images[1] },
            { title: "Hajj Group 2024", cat: "Travels", img: images[2] },
            { title: "Digital Skills Workshop", cat: "Training", img: images[3] },
            { title: "Premium Brand Identity", cat: "Printing", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80" },
            { title: "Luxury Safari Tour", cat: "Travels", img: images[4] }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[350px] md:h-[400px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-navy-light font-bold uppercase tracking-widest text-sm mb-2">{project.cat}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white">
                  <ArrowRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
