import React from 'react';
import { Github, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'C# Applications',
      description: 'Developed various applications demonstrating object-oriented programming principles, data structures, and algorithmic problem-solving using C#.',
      technologies: ['C#', '.NET', 'OOP'],
      github: 'https://github.com/davidset87'
    },
    {
      title: 'JavaScript Web Projects',
      description: 'Built interactive web applications using JavaScript, HTML, and CSS. Implemented DOM manipulation, event handling, and responsive design.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/davidset87'
    },
    {
      title: 'Database Management',
      description: 'Created and managed relational databases using MS SQL Server. Practiced complex queries, stored procedures, and data modeling techniques.',
      technologies: ['MS SQL Server', 'T-SQL', 'Database Design'],
      github: 'https://github.com/davidset87'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects & Portfolio</h2>
      
      <div className="projects-intro">
        <p className="projects-description">
          Explore my academic and personal projects showcasing practical application of programming 
          fundamentals, database management, and web development. All projects follow clean code 
          principles and demonstrate problem-solving capabilities.
        </p>
        <a 
          href="https://github.com/davidset87" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="github-btn">
            <Github size={20} />
            View All on GitHub
          </button>
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">
              <Folder size={32} />
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                aria-label="View on GitHub"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;