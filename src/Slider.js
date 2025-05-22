import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Slider.css';

const Slider = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image: require('./assets/pic12.jpg'),
      title: 'Welcome to ReactNurture',
      
      cardTitle: 'Premium Learning Experience',
      cardDescription: 'Master React with Premium, High-End Learning Resources.',
      cardButtonText: 'Start Learning',
    },
    {
      image: require('./assets/image-5.jpg'),
      title: 'Discover Features',
      
      cardTitle: 'Minimal Requirements',
      cardDescription: 'All You Need is a Laptop to Start Learning React.',
      cardButtonText: 'Explore Now',
    },
    {
      image: require('./assets/pic13.jpg'),
      title: 'Join the Community',
      
      cardTitle: 'Self-Paced Learning',
      cardDescription: 'Learn React Independently – No Tutor Needed.',
      cardButtonText: 'Join Today',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < slides.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slider-item" key={index}>
            <img className="slider-image" src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="slider-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>

              <div className="small-card">
                <h4>{slide.cardTitle}</h4>
                <p>{slide.cardDescription}</p>
                <button className="small-card-button" onClick={() => navigate('/signup')}>
                  {slide.cardButtonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;