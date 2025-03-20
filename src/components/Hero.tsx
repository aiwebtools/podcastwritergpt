
import React, { useEffect, useRef } from 'react';
import { Headphones, ChevronDown, Mic } from 'lucide-react';
import { images } from '@/assets/images';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create floating particles
    if (containerRef.current) {
      const container = containerRef.current;
      const numParticles = 15;
      
      // Remove any existing particles
      const existingParticles = container.querySelectorAll('.particle');
      existingParticles.forEach(particle => particle.remove());
      
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle absolute w-1 h-1 rounded-full bg-cyber-neon-blue opacity-0';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${5 + Math.random() * 10}s`;
        particle.style.boxShadow = '0 0 10px 2px rgba(88, 230, 255, 0.7)';
        
        // Add animations
        particle.animate(
          [
            { opacity: 0, transform: 'translateY(0) scale(0.3)' },
            { opacity: 0.7, transform: `translateY(-${20 + Math.random() * 100}px) scale(1)` },
            { opacity: 0, transform: `translateY(-${50 + Math.random() * 150}px) scale(0.5)` }
          ],
          {
            duration: 5000 + Math.random() * 5000,
            easing: 'ease-out',
            iterations: Infinity
          }
        );
        
        container.appendChild(particle);
      }
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden cyber-grid-bg"
      style={{ 
        backgroundImage: `url(${images.backgroundPattern})`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyber-neon-blue/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-cyber-neon-purple/5 blur-3xl"></div>
      
      {/* Hero content */}
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="inline-block mb-8 cyber-card px-4 py-2 border-cyber-neon-blue/30 animate-float">
          <p className="text-[#FEF7CD] text-sm md:text-base flex items-center gap-2 font-semibold"
             style={{ 
               textShadow: '0 0 10px #F97316, 0 0 15px #F97316, 0 0 20px #FEF7CD',
               animation: 'pulse 2s infinite'
             }}>
            <Headphones className="w-4 h-4" />
            <span>Elevate Your Podcast Game with AI</span>
          </p>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tighter">
          <span className="block">Create Professional</span>
          <span className="text-gradient">Podcast Scripts</span>
          <span className="block">in Minutes</span>
        </h1>
        
        <p className="text-lg md:text-xl text-cyber-text-secondary max-w-3xl mx-auto mb-10">
          Craft engaging, structured, and professionally formatted podcast scripts optimized for audio storytelling — no experience required.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="https://chatgpt.com/g/g-67db5475a0708191b865c55abc138611-podcast-script-writer-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="main-cta w-full md:w-auto text-center"
          >
            Try Podcast Script Writer GPT
          </a>
          
          <a 
            href="#how-it-works" 
            className="secondary-cta w-full md:w-auto text-center flex items-center justify-center gap-2"
          >
            <span>How It Works</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      {/* Featured image */}
      <div className="relative w-full max-w-4xl mx-auto mt-4 mb-10 p-4 opacity-90 animate-slide-up">
        <div className="aspect-video relative rounded-lg overflow-hidden cyber-border">
          <a href={images.ideogramImage} target="_blank" rel="noopener noreferrer">
            <img 
              src={images.ideogramImage} 
              alt="Podcast Script Writer GPT in action" 
              className="w-full h-full object-cover object-center rounded-lg transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg-darker to-transparent opacity-50"></div>
          </a>
        </div>
        
        {/* Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
          <div className="flex items-center justify-center gap-2 p-4 bg-cyber-bg-darker/80 backdrop-blur-sm rounded-lg border border-cyber-neon-blue/30">
            <Mic className="w-6 h-6 text-cyber-neon-blue" />
            <span>Podcast Script Writer GPT</span>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-lg opacity-20 animate-pulse" style={{ 
          boxShadow: '0 0 40px 5px rgba(88, 230, 255, 0.5)',
          animation: 'pulse 3s infinite' 
        }}></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#how-it-works" className="block p-2 rounded-full border border-cyber-neon-blue/30 text-cyber-neon-blue">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
