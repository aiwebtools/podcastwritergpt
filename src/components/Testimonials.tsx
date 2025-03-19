
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { images } from '@/assets/images';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Podcast Host, Tech Insights Weekly",
      avatar: images.testimonialAvatars[0],
      content: "This AI has completely transformed my podcast preparation process. What used to take me hours of writing and rewriting now happens in minutes, and the quality is professional-grade.",
      rating: 5
    },
    {
      name: "Mark Daniels",
      role: "Indie Podcaster",
      avatar: images.testimonialAvatars[1],
      content: "As someone with zero script writing experience, Podcast Script Writer GPT was a game-changer. It helps me sound more confident and my listeners have definitely noticed the improvement.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Interview Show Host",
      avatar: images.testimonialAvatars[2],
      content: "The interview questions it generates are thoughtful and engaging. My guests often comment on how well-prepared I seem. This tool has elevated my podcast to a new level of professionalism.",
      rating: 5
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-cyber-bg-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-cyber-neon-blue animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-cyber-neon-pink animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cyber-neon-purple/5 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 cyber-card px-3 py-1 border-cyber-neon-blue/30">
            <p className="text-cyber-neon-blue text-sm tracking-wider">CREATOR STORIES</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What <span className="text-gradient">Podcasters</span> Say
          </h2>
          <p className="text-cyber-text-secondary max-w-3xl mx-auto">
            Join thousands of podcasters who have transformed their content creation process.
          </p>
        </div>
        
        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="cyber-card relative group hover:border-cyber-neon-blue/50 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 flex items-center justify-center rounded-full bg-cyber-bg-darker border border-cyber-neon-blue/30 text-cyber-neon-blue">
                <Quote className="w-4 h-4" />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyber-neon-blue text-cyber-neon-blue" />
                  ))}
                </div>
              </div>
              
              <p className="text-cyber-text-secondary mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border border-cyber-neon-blue/30 object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-cyber-text-secondary">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute -right-1 -bottom-1 w-8 h-8 border-r border-b border-cyber-neon-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -left-1 -top-1 w-8 h-8 border-l border-t border-cyber-neon-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
