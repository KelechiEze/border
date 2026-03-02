import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Lightbulb, Shirt, Printer, Compass, Globe, ArrowRight } from 'lucide-react';

const OurServices = () => {
  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-navy/20 text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              We Provide Best Business <br className="hidden md:block" /> Service For You
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Leadership Training", icon: GraduationCap, desc: "Empowering next-gen leaders through tailored professional workshops." },
            { title: "Digital Literacy", icon: Lightbulb, desc: "Bridging the digital divide with comprehensive tech skills training." },
            { title: "Custom Apparel", icon: Shirt, desc: "High-quality creative printing for personal and corporate identity." },
            { title: "Corporate Branding", icon: Printer, desc: "Complete branding solutions from design to final printed products." },
            { title: "Hajj & Umrah", icon: Compass, desc: "Seamless spiritual journeys with premium travel and tour packages." },
            { title: "Global Bookings", icon: Globe, desc: "Hassle-free flight and hotel reservations across all borders." }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 md:p-10 rounded-[24px] md:rounded-[32px] shadow-sm border border-charcoal/5 group transition-all hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-off-white rounded-full flex items-center justify-center text-primary mb-8 group-hover:bg-navy group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-charcoal/60 mb-8 leading-relaxed">
                {service.desc}
              </p>
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

export default OurServices;
