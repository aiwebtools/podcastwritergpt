
import React from 'react';
import { Mic, ExternalLink, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'Podcast Script Writer GPT', url: 'https://chatgpt.com/g/g-67db5475a0708191b865c55abc138611-podcast-script-writer-gpt' },
    { label: 'Try Book Writer GPT', url: 'https://bookwritergpt.lovable.app/?via=aiwebtools' },
    { label: 'Try Movie Script Writer GPT', url: 'https://moviescriptwritergpt.lovable.app/?via=aiwebtools' },
    { label: 'FAQ', url: '#faq' },
    { label: 'Disclaimer', url: '#disclaimer' },
    { label: 'More AI Tools', url: 'https://www.aiwebtools.ai' },
  ];

  return (
    <footer className="relative pt-24 pb-10 px-6 bg-cyber-bg-darker border-t border-cyber-neon-blue/20">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and info */}
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyber-bg-dark border border-cyber-neon-blue/30 group-hover:border-cyber-neon-blue/60 transition-all duration-300">
                <Mic className="w-5 h-5 text-cyber-neon-blue" />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-white">
                  Podcast Script Writer <span className="text-gradient">GPT</span>
                </h2>
                <p className="text-xs text-cyber-text-secondary">Presented by AiWebTools.Ai</p>
              </div>
            </a>
            
            <p className="text-cyber-text-secondary">
              Craft engaging, structured, and professionally formatted podcast scripts optimized for audio storytelling — no experience required.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a 
                href="tel:+14758008096" 
                className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(475) 800-8096</span>
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>
          
          {/* Footer navigation */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors"
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.url.startsWith('http') && <ExternalLink className="w-4 h-4" />}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call-to-action button */}
        <div className="fixed bottom-6 right-6 z-30">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="main-cta inline-flex items-center gap-2 px-5 py-3 rounded-full shadow-neon"
          >
            <span>More AI Tools</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="pt-10 border-t border-cyber-neon-blue/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cyber-text-secondary text-sm">
            &copy; 2025 <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-neon-blue transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.lovable.app/disclaimers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
