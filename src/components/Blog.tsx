import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { images } from '../constants';

const Blog = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-navy/20 text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
              Latest News
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Read Our Latest Insights <br className="hidden md:block" /> & Industry News
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "The Future of Digital Literacy in 2024", date: "March 15, 2024", img: images[3] },
            { title: "Top 10 Hajj Travel Tips for First-Timers", date: "February 28, 2024", img: images[2] },
            { title: "Why Custom Branding Matters for Small Businesses", date: "January 10, 2024", img: images[1] }
          ].map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[250px] md:h-[300px] rounded-[24px] md:rounded-[32px] overflow-hidden mb-6">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-navy text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  {post.date}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                {post.title}
              </h3>
              <a href="#" className="inline-flex items-center font-bold text-primary group-hover:text-accent transition-colors">
                Read More <ArrowRight size={18} className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
