import React from 'react';
import { Briefcase, GraduationCap, Award, Globe } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Education',
      description: 'Bachelor\'s in Programming & Data Analysis'
    },
    {
      icon: <Award size={24} />,
      title: 'Certified',
      description: 'Microsoft Azure Fundamentals (AZ-900)'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Background',
      description: 'Industrial Chemistry + IT Transition'
    },
    {
      icon: <Globe size={24} />,
      title: 'Languages',
      description: '4 Languages: French, English, Polish, Swahili'
    }
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-paragraph">
            I am a dedicated Bachelor's student in <strong>Programming and Data Analysis</strong> with a 
            unique background that combines technical expertise in software development with practical 
            experience in industrial chemistry and customer service.
          </p>
          <p className="about-paragraph">
            My journey from chemistry to IT demonstrates my <strong>adaptability</strong> and passion for 
            technology. I bring strong analytical thinking, attention to detail, and problem-solving 
            skills cultivated through diverse professional experiences.
          </p>
          <p className="about-paragraph">
            Currently, I'm building my technical foundation with <strong>C#, JavaScript, MS SQL Server</strong>, 
            and cloud technologies. I'm certified in <strong>Microsoft Azure Fundamentals</strong> and actively 
            developing projects that showcase my growing capabilities in software development and data analysis.
          </p>
          <p className="about-paragraph">
            I'm seeking an <strong>internship or junior position in IT or Data Analysis</strong> where I can 
            contribute my analytical mindset, technical skills, and eagerness to learn in a professional 
            environment that values growth and innovation.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;