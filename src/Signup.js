import React, { useState } from 'react';
import './Signup.css';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import LeftImage from './assets/login1.svg';
import RightImage from './assets/login2.svg';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();  // Initialize the navigate hook

  const togglePassword = () => setShowPassword(!showPassword);

  const handleRegister = () => {
    // Handle any necessary registration logic (validation, API calls, etc.)
    // After successful registration, navigate to the MainPage
    navigate('/home');  // Navigate to MainPage (home route)
  };

  return (
    <div className="signup-wrapper">
      <img src={LeftImage} alt="left" className="login1" />
      <img src={RightImage} alt="right" className="login2" />

      <div className="signup-card">
        <h2 className="signup-title">Create your account 🚀</h2>

        <form className="signup-form">
          <div className="input-group">
            <label>Full Name</label>
            <div className="input-field">
              <FaUser className="icon" />
              <input type="text" placeholder="Enter your name" />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <div className="input-field">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-field">
              <FaLock className="icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
              />
              <span onClick={togglePassword} className="toggle-icon">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Register Button */}
          <button type="button" className="signup-btn" onClick={handleRegister}>
            Register
          </button>

          <div className="divider">OR</div>

          <div className="social-login">
            <button className="social-btn google"><FaGoogle /></button>
            <button className="social-btn facebook"><FaFacebook /></button>
            <button className="social-btn apple"><FaApple /></button>
          </div>

          <p className="login-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
