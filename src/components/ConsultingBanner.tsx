import React from 'react';
import { motion } from 'motion/react';

const ConsultingBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] overflow-hidden shadow-2xl h-[400px] md:h-[500px] border-4 border-off-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.436323490747!2d-1.5878416841002!3d54.975454980351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e70c567756237%3A0x6d0a7a4f5f5f5f5f!2sByker%2C%20Newcastle%20upon%20Tyne!5e0!3m2!1sen!2suk!4v1646726920459!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="RB Borders Location"
            ></iframe>
          </motion.div>

          {/* Right: Referral Incentive */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy p-8 md:p-12 rounded-[32px] text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <span className="inline-block bg-accent text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              Referral Incentive
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Earn 2% Referral <br /> Incentive
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Earn 2 percent referral incentive on successful travel bookings. Refer clients and grow with us.
            </p>
            
            <div className="space-y-4 border-t border-white/10 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-white/90 font-medium">An instalment payment allowed in some cases.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-white/90 font-medium">Terms and condition apply.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingBanner;
