import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Olumide K.",
    role: "MEDICAL DIRECTOR, LAGOS GENERAL",
    text: "The quality of the surgical textiles we received was unparalleled. Their service is efficient, and the delivery was right on schedule. Truly a dependable partner in Nigerian healthcare.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Dr. Olumide K.",
    role: "MEDICAL DIRECTOR, LAGOS GENERAL",
    text: "The quality of the surgical textiles we received was unparalleled. Their service is efficient, and the delivery was right on schedule. Truly a dependable partner in Nigerian healthcare.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Dr. Olumide K.",
    role: "MEDICAL DIRECTOR, LAGOS GENERAL",
    text: "The quality of the surgical textiles we received was unparalleled. Their service is efficient, and the delivery was right on schedule. Truly a dependable partner in Nigerian healthcare.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-dark-navy overflow-hidden relative">
      {/* Background Quote Decoration */}
      <div className="absolute right-10 top-10 opacity-10 pointer-events-none hidden lg:block">
        <Quote size={300} className="text-white" strokeWidth={1} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-accent text-primary px-6 py-1.5 rounded-md text-sm font-bold uppercase tracking-widest mb-6">
              Testimonial
            </span>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              WHAT OUR CLIENT'S SAY
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-light">
              Discover why leading medical institutions in Nigeria trust RB Borders for their professional needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-navy/30 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-[24px] flex flex-col h-full hover:border-accent/30 transition-colors group"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    size={18} 
                    className={index < item.rating ? "text-accent" : "text-white/20"} 
                    fill={index < item.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-10 italic font-light flex-grow">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <h4 className="text-accent font-bold text-lg leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-wider mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
