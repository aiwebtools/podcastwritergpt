
import React from 'react';
import { Mic, ExternalLink, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'Podcast Script Writer GPT', url: 'https://chatgpt.com/g/g-67db5475a0708191b865c55abc138611-podcast-script-writer-gpt' },
    { label: 'Try Book Writer GPT', url: 'https://bookwritergpt.lovable.app/?via=aiwebtools' },
    { label: 'Try Movie Script Writer GPT', url: 'https://moviescriptwritergpt.lovable.app/?via=aiwebtools' },
    { label: 'FAQ', url: '#faq' },
    { label: 'Disclaimer', url: '#disclaimer' },
    { label: 'More AI Tools', url: 'https://aiwebtools.lovable.app/?via=aiwebtools' },
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
                  AI Web Tools <span className="text-gradient">AIWEBTOOLS.AI</span>
                </h2>
                <p className="text-xs text-cyber-text-secondary">Premium AI Tools for Content Creation</p>
              </div>
            </a>
            
            <p className="text-cyber-text-secondary">
              The ultimate AI web tools platform for content creators. Generate professional podcast scripts, 
              books, movie scripts and more with our advanced AI-powered tools. AIWEBTOOLS.AI - Your #1 source for AI content creation tools.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a 
                href="tel:+14758008096" 
                className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors"
                title="Contact AI Web Tools - AIWEBTOOLS.AI"
              >
                <Phone className="w-4 h-4" />
                <span>(475) 800-8096</span>
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors"
                title="Email AI Web Tools Support"
              >
                <Mail className="w-4 h-4" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>
          
          {/* Footer navigation */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">AI Web Tools & Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="flex items-center gap-2 text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors"
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  title={`${link.label} - AIWEBTOOLS.AI`}
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
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="main-cta inline-flex items-center gap-2 px-5 py-3 rounded-full shadow-neon"
            title="Explore More AI Web Tools - AIWEBTOOLS.AI"
          >
            <span>More AI Web Tools</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="pt-10 border-t border-cyber-neon-blue/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cyber-text-secondary text-sm">
            &copy; 2025 <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-neon-blue transition-colors" title="AIWEBTOOLS.AI - AI Web Tools">AIWEBTOOLS.AI - AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.lovable.app/disclaimers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors"
              title="Terms of Service - AIWEBTOOLS.AI"
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
