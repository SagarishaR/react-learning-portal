import React from 'react';
import './ExpertsSection.css';

const experts = [
  {
    image: require('./assets/pro1.jpg'),
    name: 'Dan Abramov',
    title: 'React Core Team',
    quote: 'React isn’t a framework, it’s a library for building composable UIs. That makes it flexible and powerful.',
    position: 'left',
  },
  {
    image: require('./assets/pro2.jpg'),
    name: 'Addy Osmani',
    title: 'Google Engineer',
    quote: 'Modern JavaScript is all about performance, scalability, and maintainability. React gets you there fast.',
    position: 'right',
  },
  {
    image: require('./assets/pro3.avif'),
    name: 'Kent C. Dodds',
    title: 'JS Educator',
    quote: 'React is not just a tool, it’s a way of thinking about your UI and application structure.',
    position: 'left',
  },
];

const ExpertsSection = () => {
  return (
    <div className="experts-section">
      <h2 className="experts-title">What Professionals Say About React & JavaScript</h2>
      {experts.map((expert, index) => (
        <div
          key={index}
          className={`expert-block ${expert.position === 'left' ? 'left-img' : 'right-img'}`}
        >
          <img src={expert.image} alt={expert.name} className="expert-image" />
          <div className="expert-content">
            <h3>{expert.name}</h3>
            <p className="expert-title">{expert.title}</p>
            <p className="expert-quote">“{expert.quote}”</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertsSection;
