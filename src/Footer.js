import React from "react";
import "./Footer.css"; // Make sure to create this file for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>Powered by React & JavaScript ⚡</p>
        <p>&copy; 2025 reactnurture.org. All rights reserved.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <p>Contact us: <a href="mailto:rsagarisha@gmail.com">rsagarisha@gmail.com</a></p>
        </div>

        <div className="social-icons">
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="LinkedIn">💼</a>
          <a href="#" aria-label="GitHub">🐙</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
