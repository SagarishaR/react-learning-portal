import React from 'react';
import './Navbar.css'; 
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">ReactNurture</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/feature-explain">Features</Link>
        <Link to="/about">About</Link>
        <button className="login-button" onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;