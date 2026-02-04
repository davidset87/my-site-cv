import React from 'react';
import './Languages.css';

const Languages = () => {
  const languages = [
    { name: 'French', level: 'Native', proficiency: 100, flag: '🇫🇷' },
    { name: 'English', level: 'C1 - Advanced', proficiency: 90, flag: '🇬🇧' },
    { name: 'Polish', level: 'B2 - Upper Intermediate', proficiency: 75, flag: '🇵🇱' },
    { name: 'Swahili', level: 'Fluent', proficiency: 95, flag: '🇰🇪' }
  ];

  return (
    <section id="languages" className="languages-section">
      <h2 className="section-title">Languages</h2>
      
      <div className="languages-grid">
        {languages.map((lang, index) => (
          <div key={index} className="language-card">
            <div className="language-flag">{lang.flag}</div>
            <h3 className="language-name">{lang.name}</h3>
            <p className="language-level">{lang.level}</p>
            <div className="language-bar">
              <div 
                className="language-progress" 
                style={{ width: `${lang.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;