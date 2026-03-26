import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_7a7bpay';
    const templateID = 'template_70n1ttb'; // ✅ FIXED
    const publicKey = 'IY7Umje5EkZzdGsyd';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('✅ Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSending(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('❌ Error sending message. Please try again.');
        setIsSending(false);
      });
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
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/davidset87"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
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
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows="6"
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSending}>
            <Send size={20} />
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;