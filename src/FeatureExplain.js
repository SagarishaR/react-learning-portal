import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeatureExplain.css';

const FeatureExplain = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/signup');
  };

  return (
    <div className="features-page">
      <section className="hero-section">
        <h1>Discover the Power of ReactNurture</h1>
        <p className="hero-subtitle">
          Unlock a world of seamless learning and engagement with our cutting-edge features.
        </p>
        <button className="cta-button" onClick={handleCTAClick}>
          Get Started Now
        </button>
      </section>

      <section className="features-content">
        <h2>Core Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🖥️</span>
            <h3>Interactive UI</h3>
            <p>Built with React for a dynamic and seamless user experience.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Fast Navigation</h3>
            <p>Powered by React Router for smooth and instant page transitions.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h3>Responsive Design</h3>
            <p>Optimized for desktops, tablets, and mobile devices.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎨</span>
            <h3>Customizable Profiles</h3>
            <p>Personalize your experience with tailored user profiles.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <h2>Why Choose ReactNurture?</h2>
        <p>
          ReactNurture is crafted to empower users with an intuitive platform for exploration, learning, and engagement. Our features are designed to maximize usability, foster creativity, and deliver a delightful experience every time.
        </p>
        <button className="secondary-cta-button" onClick={handleCTAClick}>
          Join Our Community
        </button>
      </section>
    </div>
  );
};

export default FeatureExplain;