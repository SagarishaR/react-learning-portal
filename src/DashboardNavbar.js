import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DashboardNavbar.css';


const DashboardNavbar = () => {
  const location = useLocation();

  const links = [
    { to: '/main', label: 'Home' },
    
    { to: '/mindmap', label: 'Mind Map' },
    { to: '/badges', label: 'Badges' },
    { to: '/compiler', label: 'Compiler' },
    { to: '/profile', label: 'Profile' }
  ];

  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar-container">
        <div className="logo">ReactNurture</div>
        <ul className="nav-links">
          {links.map(link => (
            <li key={link.to} className={location.pathname === link.to ? 'active' : ''}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// ✅ This line is necessary
export default DashboardNavbar;
