import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p className="footer-copyright">
            © {currentYear} David Kezi Setondo. All rights reserved.
          </p>
          <p className="footer-tagline">
            Built with <Heart size={16} className="heart-icon" /> and dedication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;