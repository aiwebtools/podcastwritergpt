
import React, { useState, useEffect } from 'react';
import { Mic, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerLinks = [
    { label: 'Podcast Script Writer GPT', url: 'https://chatgpt.com/g/g-67db5475a0708191b865c55abc138611-podcast-script-writer-gpt' },
    { label: 'Try Book Writer GPT', url: 'https://bookwritergpt.lovable.app/?via=aiwebtools' },
    { label: 'Try Movie Script Writer GPT', url: 'https://moviescriptwritergpt.lovable.app/?via=aiwebtools' },
    { label: 'FAQ', url: '#faq' },
    { label: 'Disclaimer', url: '#disclaimer' },
    { label: 'More AI Tools', url: 'https://www.aiwebtools.ai' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        scrolled ? 'bg-cyber-bg-darker/90 backdrop-blur-lg shadow-neon' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-cyber-bg-darker border border-cyber-neon-blue/30 group-hover:border-cyber-neon-blue/60 transition-all duration-300">
            <Mic className="w-5 h-5 text-cyber-neon-blue" />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 15px theme("colors.cyber.neon-blue")' }}></div>
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight text-white">
              Podcast Script Writer <span className="text-gradient">GPT</span>
            </h1>
            <p className="text-xs text-cyber-text-secondary">Presented by AiWebTools.Ai</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {headerLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              className="text-sm text-cyber-text-secondary hover:text-cyber-neon-blue transition-colors duration-200"
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-white hover:text-cyber-neon-blue transition-colors focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 top-16 z-40 bg-cyber-bg-darker/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out lg:hidden',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 py-8">
            {headerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-lg bg-cyber-bg-darker px-4 py-2 rounded-md border border-cyber-neon-blue/30 text-white hover:text-cyber-neon-blue hover:border-cyber-neon-blue/60 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
