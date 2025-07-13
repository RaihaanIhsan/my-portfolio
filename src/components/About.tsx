
import React from 'react';
import { Code, Palette, Zap, Coffee } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "Frontend", icon: Code, techs: ["React", "TypeScript", "CSS", "JavaScript"] },
    { name: "Backend", icon: Zap, techs: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "Design", icon: Palette, techs: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] },
    { name: "Tools", icon: Coffee, techs: ["Git", "Docker", "AWS", "Vercel"] }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About Me
          </h2>
          <p className="section-description">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">
                <skill.icon size={32} />
              </div>
              <h3 className="skill-title">
                {skill.name}
              </h3>
              <ul className="skill-list">
                {skill.techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
