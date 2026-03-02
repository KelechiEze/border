import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import BusinessSolutions from './components/BusinessSolutions';
import Objective from './components/Objective';
import CaseStudies from './components/CaseStudies';
import OurServices from './components/OurServices';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import TeamMembers from './components/TeamMembers';
import FunFacts from './components/FunFacts';
import Blog from './components/Blog';
import CTA from './components/CTA';
import ConsultingBanner from './components/ConsultingBanner';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="relative w-full overflow-x-hidden bg-off-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <BusinessSolutions />
      <Objective />
      <CaseStudies />
      <OurServices />
      <Portfolio />
      <Testimonials />
      <TeamMembers />
      <FunFacts />
      <Blog />
      <CTA />
      <ConsultingBanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
