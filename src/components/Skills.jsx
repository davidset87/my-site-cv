import React from 'react';
import { Code, Database, Cloud, Table } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming & Web',
      icon: <Code size={24} />,
      skills: [
        { name: 'C#', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML & CSS', level: 80 }
      ]
    },
    {
      category: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'MS SQL Server', level: 70 },
        { name: 'Database Fundamentals', level: 75 },
        { name: 'Data Modeling', level: 65 }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud size={24} />,
      skills: [
        { name: 'Microsoft Azure (AZ-900)', level: 70 },
        { name: 'Git & GitHub', level: 75 }
      ]
    },
    {
      category: 'Data & Tools',
      icon: <Table size={24} />,
      skills: [
        { name: 'Data Analysis', level: 65 },
        { name: 'Microsoft Excel', level: 80 },
        { name: 'MS Office Suite', level: 85 }
      ]
    }
  ];

  const softSkills = [
    'Analytical Thinking',
    'Problem Solving',
    'Attention to Detail',
    'Team Collaboration',
    'Autonomy & Adaptability',
    'Time Management'
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.category}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="soft-skills-section">
        <h3 className="soft-skills-title">Additional Skills</h3>
        <div className="soft-skills-list">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;