
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>John Doe</h3>
            <p>Full Stack Developer</p>
          </div>
          
          <div className="footer-social">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            <span>© {currentYear} Made with</span>
            <Heart size={16} className="heart" />
            <span>by John Doe</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
