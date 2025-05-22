import React from 'react';
import './Features.css';

const features = [
  {
    title: 'Dashboard Overview',
    description: 'Different levels - Beginner to Advanced.',
    image: require('./assets/step.jpg'),
  },
  {
    title: 'Seamless Integration',
    description: 'Integrated compiler for high end practice.',
    image: require('./assets/compiler.jpg'),
  },
  {
    title: 'Real-Time Updates',
    description: 'Get badges on successful completion of levels.',
    image: require('./assets/badge.jpg'),
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-heading">Key Features of the Portal</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} className="feature-img" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
