import React, { useState } from 'react';
import './Login.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import LeftImage from './assets/login1.svg';
import RightImage from './assets/login2.svg';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = () => {
    // For now, we're just redirecting to the homepage after clicking "Sign In"
    // You can add actual authentication logic here
    if (email && password) {
      navigate('/home'); // Redirect to the home page after successful login
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="login-wrapper">
      {/* LEFT and RIGHT SVG ILLUSTRATIONS */}
      <img src={LeftImage} alt="left" className="login1" />
      <img src={RightImage} alt="right" className="login2" />

      <div className="login-card">
        <h2 className="login-title">Welcome back 👋</h2>

        <form className="login-form">
          <div className="input-group">
            <label>Email</label>
            <div className="input-field">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-field">
              <FaLock className="icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
              <span onClick={togglePassword} className="toggle-icon">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" /> Keep me logged in
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button type="button" className="login-btn" onClick={handleLogin}>
            Sign in
          </button>

          <div className="divider">OR</div>

          <div className="social-login">
            <button className="social-btn google"><FaGoogle /></button>
            <button className="social-btn facebook"><FaFacebook /></button>
            <button className="social-btn apple"><FaApple /></button>
          </div>

          <p className="register">
            Not a member yet? <Link to="/signup">Register now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
