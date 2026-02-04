import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree – Programming and Data Analysis",
      institution: 'Wyższa Szkoła Ekonomii i Informatyki w Krakowie',
      location: 'Kraków, Poland',
      period: 'Oct 2024 – Present',
      current: true
    },
    {
      degree: 'Chemical Technology',
      institution: 'AGH University of Science and Technology',
      location: 'Kraków, Poland',
      period: 'Oct 2023 – Apr 2024',
      current: false
    },
    {
      degree: 'Computer Science Education',
      institution: 'Institute of National Professional Preparatory (INPP)',
      location: 'Likasi',
      period: 'Sep 2021 – Feb 2022',
      current: false
    },
    {
      degree: 'State Diploma – Industrial Chemistry',
      institution: 'Technical Institute of Mutoshi',
      location: 'Kolwezi',
      period: 'Sep 2017 – Jul 2021',
      current: false
    }
  ];

  const certifications = [
    'Microsoft Azure Fundamentals (AZ-900)',
    'Software Development',
    'HTML & CSS',
    'JavaScript',
    'Databases'
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education & Certifications</h2>
      
      <div className="education-content">
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index !== education.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="education-card">
                <div className="education-header">
                  <div className="education-icon">
                    <GraduationCap size={24} />
                  </div>
                  <div className="education-info">
                    <div className="education-top">
                      <h3 className="education-degree">{edu.degree}</h3>
                      {edu.current && <span className="current-badge">Current</span>}
                    </div>
                    <p className="education-institution">{edu.institution}</p>
                    <div className="education-meta">
                      <div className="meta-item">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-card">
          <div className="certifications-header">
            <Award size={28} />
            <h3 className="certifications-title">Certifications</h3>
          </div>
          <ul className="certifications-list">
            {certifications.map((cert, index) => (
              <li key={index} className="certification-item">
                <div className="cert-icon">
                  <Award size={18} />
                </div>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;