import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import './MainPage.css';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

const HomePage = () => {
  // State for Popper
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  // Handle button click to toggle Popper
  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  return (
    <>
      <DashboardNavbar />
      <div className="main-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              <span className="react-word">React</span>
              <span className="craft-word">Nurture</span>
            </h1>
            <p>Craft modern web experiences with confidence. Learn React step by step.</p>
          </div>
        </section>

        <section className="section beginner">
          <h2>Beginner</h2>
          <p>Start your journey with JSX, Components, Props, and State. Everything you need to understand the building blocks of React.</p>
          <Link to="/level1" className="start-btn">Start Learning</Link>
          {/* Completed Button */}
          <Button
            variant="contained"
            color="success"
            onClick={handleButtonClick}
            style={{ marginLeft: '10px' }}
          >
            Completed
          </Button>
          {/* Popper */}
          <Popper open={open} anchorEl={anchorEl} placement="top" transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper elevation={3} style={{ padding: '15px', maxWidth: '300px', textAlign: 'center' }}>
                  <Typography variant="body1">
                    You have completed beginner level. Move to intermediate level to earn a <strong>silver badge</strong>!
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </section>

        <div className="section-break"></div>

        <section className="section intermediate">
          <h2>Intermediate</h2>
          <p>Take it to the next level with Hooks, Forms, Routing, and Lifecycle methods to build powerful dynamic applications.</p>
          <Link to="/level2" className="start-btn">Start Learning</Link>
        </section>

        <div className="section-break"></div>

        <section className="section advanced">
          <h2>Advanced </h2>
          <p>Master React with Redux, Context API, and performance optimizations. Build scalable, maintainable apps.</p>
          <Link to="/level3" className="start-btn">Start Learning</Link>
        </section>

        <section className="learning-path">
          <h2>Learning Path</h2>
          <div className="flowchart">
            <div className="flow-step">JSX & Components</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Props & State</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Hooks & Forms</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Routing</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Context & Redux</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Deployment</div>
          </div>
          <p className="flow-note">Progressively unlock each module. Stay sharp.</p>
        </section>

        <footer className="main-footer">
          <p>© 2025 ReactCraft. Empowering developers.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;