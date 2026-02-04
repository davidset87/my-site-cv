import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Kitchen Assistant',
      company: 'Mustachos',
      location: 'Kraków, Poland',
      period: 'Oct 2024 – Aug 2025',
      current: false,
      responsibilities: [
        'Worked efficiently in fast-paced environment ensuring organization and cleanliness',
        'Demonstrated time management, discipline, and teamwork under pressure',
        'Maintained high hygiene standards and operational efficiency'
      ]
    },
    {
      title: 'Customer Service Representative (French-speaking)',
      company: 'MULYKAP SARL',
      location: 'Remote',
      period: 'Jan 2022 – Jun 2022',
      current: false,
      responsibilities: [
        'Provided technical support to customers via phone and email',
        'Resolved issues through structured troubleshooting and clear communication',
        'Tracked customer requests and feedback to improve service quality',
        'Conducted customer satisfaction surveys in French'
      ]
    },
    {
      title: 'Laboratory Operator (Industrial Chemistry)',
      company: 'KZC',
      location: 'Kolwezi',
      period: 'Oct 2020 – Nov 2020',
      current: false,
      responsibilities: [
        'Performed sampling, pH measurement, and density analysis',
        'Recorded and analyzed data for quality control',
        'Followed strict procedures and documentation standards'
      ]
    },
    {
      title: 'Internship – Chemical Analysis',
      company: 'Gecamines Likasi',
      location: 'Likasi',
      period: 'July 2019 – August 2019',
      current: false,
      responsibilities: [
        'Conducted physicochemical analyses from sampling to instrumental analysis',
        'Determined metal concentrations (primarily copper) through acid digestion and titration',
        'Performed filtration, dilution, and instrumental analysis for liquid and solid samples'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              {index !== experiences.length - 1 && <div className="timeline-line"></div>}
            </div>
            
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                {exp.current && <span className="current-badge">Current</span>}
              </div>
              
              <div className="experience-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;