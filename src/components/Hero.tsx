
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-bg-circle-1"></div>
        <div className="hero-bg-circle-2"></div>
      </div>
      
      <div className="hero-content">
        <div className="animate-fade-in">
          <h1 className="hero-title">
            Fathima Raihaan Ihsan
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer
          </p>
          <p className="hero-description">
            Crafting digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and bringing ideas to life.
          </p>
          
          <div className="hero-social">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-link"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-link"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:john@example.com" 
              className="hero-social-link"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="hero-cta"
          >
            <span>Discover my work</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
