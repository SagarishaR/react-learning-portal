import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    level: 'Advanced',
  });

  useEffect(() => {
    // Simulate fetching user data (replace with actual API call)
    const fetchUserData = async () => {
      // const response = await fetch('/api/user');
      // const data = await response.json();
      // setUserData(data);
    };
    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Your Profile</h1>
      </header>

      <main className="profile-content">
        <div className="profile-card">
          <h2>Welcome, {userData.name}</h2>
          <div className="profile-details">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Level:</strong> {userData.level}</p>
          </div>
          <Link to="/edit-profile" className="edit-profile-btn">
            Edit Profile
          </Link>
        </div>
      </main>

      <footer className="profile-footer">
        <Link to="/" className="back-to-home">Back to Home</Link>
      </footer>
    </div>
  );
};

export default Profile;