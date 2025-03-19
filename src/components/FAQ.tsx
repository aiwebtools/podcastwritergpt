
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-cyber-neon-blue/20 last:border-b-0">
      <button 
        className="flex items-center justify-between w-full py-5 px-1 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-cyber-neon-blue/30 bg-cyber-bg-darker">
          {isOpen ? (
            <Minus className="w-4 h-4 text-cyber-neon-blue" />
          ) : (
            <Plus className="w-4 h-4 text-cyber-neon-blue" />
          )}
        </span>
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-cyber-text-secondary space-y-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is Podcast Script Writer GPT?",
      answer: (
        <p>
          Podcast Script Writer GPT is an AI tool designed to help you draft engaging and structured podcast scripts quickly. It assists with creating episode outlines, scripting dialogue, crafting interview questions, and formatting your content professionally for audio storytelling.
        </p>
      )
    },
    {
      question: "How does the script writing process work?",
      answer: (
        <>
          <p>
            The process is simple and collaborative:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Share your podcast details (theme, format, style, etc.)</li>
            <li>The AI develops a detailed episode outline</li>
            <li>The AI creates your script segment by segment</li>
            <li>You can review and request modifications at any point</li>
            <li>The final script is formatted professionally for recording</li>
          </ol>
        </>
      )
    },
    {
      question: "What types of podcasts does it support?",
      answer: (
        <p>
          Podcast Script Writer GPT supports all popular podcast formats, including solo commentary, co-hosted discussions, interview-style, narrative storytelling, educational content, news breakdowns, and comedy shows. It adapts to your specific needs and style.
        </p>
      )
    },
    {
      question: "Do I need podcasting experience to use this tool?",
      answer: (
        <p>
          Not at all! The tool is designed to be helpful for both beginners and experienced podcasters. If you're new to podcasting, it will guide you through the process and help structure your content professionally. Experienced podcasters can use it to streamline their workflow and enhance their scripts.
        </p>
      )
    },
    {
      question: "How do I access Podcast Script Writer GPT?",
      answer: (
        <p>
          You can access Podcast Script Writer GPT directly through ChatGPT by visiting our link. It's available as a specialized GPT that you can interact with to create your podcast scripts. Simply click on the "Try Podcast Script Writer GPT" button on this page.
        </p>
      )
    },
    {
      question: "Is there a cost to use this tool?",
      answer: (
        <p>
          Podcast Script Writer GPT is available as part of ChatGPT Plus subscription. If you're already a ChatGPT Plus subscriber, you can access it at no additional cost. For specific pricing information, please refer to OpenAI's subscription details.
        </p>
      )
    }
  ];

  return (
    <section id="faq" className="relative py-24 px-6 bg-cyber-bg-darker">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyber-bg-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-cyber-bg-dark to-transparent"></div>
      
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 cyber-card px-3 py-1 border-cyber-neon-blue/30">
            <p className="text-cyber-neon-blue text-sm tracking-wider">QUESTIONS & ANSWERS</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-cyber-text-secondary max-w-3xl mx-auto">
            Everything you need to know about Podcast Script Writer GPT
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="cyber-card">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
        
        {/* Additional question */}
        <div className="mt-12 text-center">
          <p className="text-cyber-text-secondary mb-4">Still have questions?</p>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="neon-button inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
