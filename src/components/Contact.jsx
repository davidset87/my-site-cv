import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'davidkezi95@gmail.com',
      link: 'mailto:davidkezi95@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+48 515 746 868',
      link: 'tel:+48515746868'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Kraków, Poland',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info-wrapper">
          <div className="contact-intro">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm currently seeking internship or junior position opportunities in IT and Data Analysis. 
              Feel free to reach out if you'd like to discuss potential opportunities, projects, or collaborations.
            </p>
          </div>

          <div className="contact-info-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">{info.icon}</div>
                <div className="contact-info-text">
                  <h4 className="contact-info-title">{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} className="contact-info-value">
                      {info.value}
                    </a>
                  ) : (
                    <p className="contact-info-value">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-social">
            <h4 className="social-title">Connect on Social</h4>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/david-kezi-setondo-7a5b0b274"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/davidset87"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="GitHub"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Send a Message</h3>
          
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
              placeholder="What's this about?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Your message..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;