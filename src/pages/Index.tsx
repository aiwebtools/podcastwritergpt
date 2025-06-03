
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
    // Update the document title with SEO optimized title
    document.title = "AI Web Tools - #1 AI Tools for Content Creation | AIWEBTOOLS.AI";
    
    // Add SEO meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the best AI web tools for content creation. Generate podcast scripts, books, movie scripts & more with our AI-powered tools. Free AI tools by AIWEBTOOLS.AI');
    }
    
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
      {/* SEO optimized page structure with proper heading hierarchy */}
      <Header />
      <main role="main">
        <Hero />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
