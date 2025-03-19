
import React from 'react';
import { FileText, MessageSquare, Headphones, PenTool } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Share Your Podcast Details",
      description: "Tell the AI about your podcast theme, structure, style, and format (solo, co-hosted, or interview)."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Generate Detailed Outline",
      description: "The AI crafts a comprehensive episode structure with hooks, segments, and transitions."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Create Professional Script",
      description: "Receive a polished script with natural dialogue, intonation cues, and strategic pauses."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Review and Record",
      description: "Fine-tune your script if needed, then record your episode with confidence."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden bg-cyber-bg-darker">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyber-bg-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-cyber-bg-dark to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-cyber-neon-blue animate-glow"></div>
      <div className="absolute bottom-1/4 left-20 w-3 h-3 rounded-full bg-cyber-neon-purple animate-glow"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 cyber-card px-3 py-1 border-cyber-neon-blue/30">
            <p className="text-cyber-neon-blue text-sm tracking-wider">STREAMLINED PROCESS</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-cyber-text-secondary max-w-3xl mx-auto">
            From concept to broadcast-ready script in just a few simple steps.
            No prior podcasting or writing experience required.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="cyber-card group hover:border-cyber-neon-blue/50 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-cyber-bg-dark border border-cyber-neon-blue/30 group-hover:border-cyber-neon-blue/60 transition-all duration-300">
                  <div className="text-cyber-neon-blue group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyber-neon-blue transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-cyber-text-secondary">
                  {step.description}
                </p>
                <div className="absolute -right-1 -bottom-1 w-8 h-8 border-r border-b border-cyber-neon-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -left-1 -top-1 w-8 h-8 border-l border-t border-cyber-neon-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-67db5475a0708191b865c55abc138611-podcast-script-writer-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neon-button inline-block"
          >
            Start Creating Your Script
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
