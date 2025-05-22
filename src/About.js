import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/signup');
  };

  return (
    <div className="about-page">
      <section className="hero-section">
        <h1>Why We Created ReactNurture</h1>
        <p className="hero-subtitle">
          Empowering learners and creators with a platform built for growth, connection, and innovation.
        </p>
        <button className="cta-button" onClick={handleCTAClick}>
          Join Our Mission
        </button>
      </section>

      <section className="mission-content">
        <h2>Our Mission</h2>
        <p>
          ReactNurture was born out of a passion for making learning accessible, engaging, and personalized. We saw a need for a platform that combines cutting-edge technology with a user-centric approach to foster creativity and skill development. Our goal is to provide a space where users can explore, learn, and connect seamlessly.
        </p>
      </section>

      <section className="vision-content">
        <h2>Our Vision</h2>
        <div className="vision-grid">
          <div className="vision-card">
            <span className="vision-icon">🌍</span>
            <h3>Global Access</h3>
            <p>Breaking down barriers to education with a platform accessible to all.</p>
          </div>
          <div className="vision-card">
            <span className="vision-icon">💡</span>
            <h3>Innovation</h3>
            <p>Leveraging React and modern tech for a dynamic user experience.</p>
          </div>
          <div className="vision-card">
            <span className="vision-icon">🤝</span>
            <h3>Community</h3>
            <p>Building a supportive network for learners and creators to thrive.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <h2>Join Us Today</h2>
        <p>
          ReactNurture is more than a platform—it's a movement to empower individuals through technology and community. Be part of our journey to redefine learning and engagement.
        </p>
        <button className="secondary-cta-button" onClick={handleCTAClick}>
          Start Your Journey
        </button>
      </section>
    </div>
  );
};

export default About;