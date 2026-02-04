import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">David Kezi Setondo</h1>
          <p className="hero-subtitle">
            Programming & Data Analysis Student | Aspiring IT Professional
          </p>
          <p className="hero-description">
            Transitioning from industrial chemistry to software development with strong
            analytical skills and Azure certification. Seeking internship opportunities
            in IT and Data Analysis.
          </p>

          <div className="hero-contact-info">
            <div className="contact-item">
              <MapPin size={18} />
              <span>Kraków, Poland</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+48 515 746 868</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>davidkezi95@gmail.com</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#contact">
              <button className="btn-primary">Get In Touch</button>
            </a>
            <div className="hero-social">
              <a
                href="https://www.linkedin.com/in/david-kezi-setondo-7a5b0b274"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/davidset87"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-placeholder">
              <div className="profile-initials">DKS</div>
            </div>
            <div className="profile-badge">
              <span className="badge-icon">🎓</span>
              <span className="badge-text">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;