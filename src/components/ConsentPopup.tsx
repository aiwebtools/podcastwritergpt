
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ConsentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('userConsent');
    
    if (!hasConsented) {
      // If no consent is stored, show the popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = () => {
    // Store consent in local storage and hide popup
    localStorage.setItem('userConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-bg-darker/80 backdrop-blur-sm animate-fade-in">
      <div className="cyber-card max-w-lg relative animate-slide-up border-cyber-neon-blue/50">
        <button 
          onClick={handleConsent} 
          className="absolute top-4 right-4 text-cyber-text-secondary hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-bold mb-4 text-white">Consent Required</h3>
        
        <p className="text-cyber-text-secondary mb-6">
          By using Podcast Script Writer GPT, you agree to our Terms of Service and Privacy Policy. 
          We use cookies and similar technologies to enhance your experience and analyze traffic to our website.
        </p>
        
        <p className="text-cyber-text-secondary mb-6">
          Please note that content generated through this tool is subject to our disclaimer, which outlines 
          limitations of liability and acceptable use policies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <a 
            href="https://aiwebtools.ai/terms-of-services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-cyber-neon-blue hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            View Terms
          </a>
          
          <button 
            onClick={handleConsent} 
            className="main-cta"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
