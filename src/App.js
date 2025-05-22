import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Slider from './Slider';
import Features from './Features';
import ExpertsSection from './ExpertsSection';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import HomePage from './HomePage';
import Profile from './Profile';
import BeginnerLevel from './BeginnerLevel';
import IntermediateLevel from './IntermediateLevel';
import AdvancedLevel from './AdvancedLevel';
import FeatureExplain from './FeatureExplain';

import About from './About';
import MindMap from './MindMap';
import Badges from './Badges';
import Compiler from './Compiler';
import { ProgressProvider } from './ProgressContext';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />}

      <div className="app-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={{ paddingTop: '80px' }}></div>
                <Slider />
                <Features />
                <ExpertsSection />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/level1" element={<BeginnerLevel />} />
          <Route path="/level2" element={<IntermediateLevel />} />
          <Route path="/level3" element={<AdvancedLevel />} />
          <Route path="/feature-explain" element={<FeatureExplain />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/mindmap" element={<MindMap />} />
          <Route path="/badges" element={<Badges />} />
         <Route path="/compiler" element={<Compiler />} /> 
        

        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <ProgressProvider>
      <Router>
        <AppContent />
      </Router>
    </ProgressProvider>
  );
}

export default App;