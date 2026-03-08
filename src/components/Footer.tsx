import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { logoUrl } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 md:mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6 md:mb-8">
              <img 
                src={logoUrl} 
                alt="RB Borders Logo" 
                className="h-12 w-auto rounded-lg shadow-md border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-tight text-white">RB</span>
                <span className="text-xl font-bold tracking-tight text-white">Borders</span>
              </div>
            </div>
            <p className="text-white/60 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              Leading the way in professional training, creative printing, and global travel solutions. Connecting borders and expanding opportunities.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4 text-white/60 text-sm md:text-base">
              {['Home', 'About Us', 'Our Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}><a href="#" className="hover:text-navy-light transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8">Our Services</h4>
            <ul className="space-y-3 md:space-y-4 text-white/60 text-sm md:text-base">
              {['Leadership Training', 'Digital Literacy', 'Custom Apparel', 'Corporate Branding', 'Hajj & Umrah'].map((service) => (
                <li key={service}><a href="#" className="hover:text-navy-light transition-colors">{service}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8">Contact Info</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start">
                <MapPin className="text-navy-light mr-4 shrink-0" size={18} md:size={20} />
                <span className="text-white/60 text-sm md:text-base">123 Business Avenue, <br /> London, UK</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-navy-light mr-4 shrink-0" size={18} md:size={20} />
                <span className="text-white/60 text-sm md:text-base">07950 952103</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-navy-light mr-4 shrink-0" size={18} md:size={20} />
                <span className="text-white/60 text-sm md:text-base">info@rbborders.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2024 RB Borders Limited. All rights reserved.</p>
          <div className="flex space-x-8 text-sm text-white/40">
            <a href="#" className="hover:text-navy-light">Privacy Policy</a>
            <a href="#" className="hover:text-navy-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
