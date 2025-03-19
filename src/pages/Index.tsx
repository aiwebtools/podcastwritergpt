
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import ConsentPopup from '@/components/ConsentPopup';

const Index: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Podcast Script Writer GPT - AI Podcast Script Generator";
    
    // Prevent animations on page load
    document.body.classList.add('preload');
    
    // Remove the preload class after a short delay to allow animations
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-bg-dark text-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Disclaimer />
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
