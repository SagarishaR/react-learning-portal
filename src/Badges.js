import React, { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import './Badges.css';

const Badges = () => {
  const [completedLevels, setCompletedLevels] = useState({
    beginner: [1, 2, 3],
    intermediate: [1, 2],
    advanced: [],
  });

  const [modal, setModal] = useState({ isOpen: false, badge: null });

  const levels = ['beginner', 'intermediate', 'advanced'];
  const maxLevels = 5;

  const badgeDescriptions = {
    beginner: {
      1: 'Completed Introduction to React',
      2: 'Mastered JSX and Components',
      3: 'Understood Props',
      4: 'Learned State Management',
      5: 'Built a Simple React App',
      master: 'Beginner React Master: Completed all beginner levels!',
    },
    intermediate: {
      1: 'Used React Hooks',
      2: 'Implemented useEffect',
      3: 'Managed Complex State',
      4: 'Integrated React Router',
      5: 'Optimized Components',
      master: 'Intermediate React Master: Completed all intermediate levels!',
    },
    advanced: {
      1: 'Built a Scalable App',
      2: 'Used Context API',
      3: 'Implemented Redux',
      4: 'Mastered Performance Optimization',
      5: 'Deployed a React App',
      master: 'Advanced React Master: Completed all advanced levels!',
    },
  };

  const toggleLevel = (category, level) => {
    setCompletedLevels((prev) => {
      const newLevels = { ...prev };
      if (newLevels[category].includes(level)) {
        newLevels[category] = newLevels[category].filter((l) => l !== level);
      } else {
        newLevels[category] = [...newLevels[category], level].sort();
      }
      return newLevels;
    });
  };

  const isCategoryCompleted = (category) => {
    return completedLevels[category].length === maxLevels;
  };

  const getProgress = (category) => {
    return (completedLevels[category].length / maxLevels) * 100;
  };

  const openModal = (category, level, isMaster = false) => {
    setModal({
      isOpen: true,
      badge: {
        category,
        level: isMaster ? 'master' : level,
        isEarned: isMaster ? isCategoryCompleted(category) : completedLevels[category].includes(level),
      },
    });
  };

  const closeModal = () => {
    setModal({ isOpen: false, badge: null });
  };

  const renderBadges = (category) => {
    const badges = [];
    for (let i = 1; i <= maxLevels; i++) {
      const isEarned = completedLevels[category].includes(i);
      badges.push(
        <div
          key={`${category}-level-${i}`}
          className={`badge ${isEarned ? 'badge-earned' : 'badge-locked'} ${isEarned ? 'animate-unlock' : ''}`}
          onClick={() => openModal(category, i)}
          title={isEarned ? `Level ${i} Completed` : `Complete Level ${i}`}
        >
          <span className="badge-icon">
            {category === 'beginner' && '🥉'}
            {category === 'intermediate' && '🥈'}
            {category === 'advanced' && '🥇'}
          </span>
          <span className="badge-text">Level {i}</span>
        </div>
      );
    }
    return badges;
  };

  const renderCategoryBadge = (category) => {
    const isEarned = isCategoryCompleted(category);
    return (
      <div
        className={`badge badge-large ${isEarned ? 'badge-earned' : 'badge-locked'} ${isEarned ? 'animate-unlock' : ''}`}
        onClick={() => openModal(category, null, true)}
        title={
          isEarned
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Master`
            : `Complete all ${category} levels`
        }
      >
        <span className="badge-icon large">
          {category === 'beginner' && '🏆'}
          {category === 'intermediate' && '🏅'}
          {category === 'advanced' && '🌟'}
        </span>
        <span className="badge-text large">
          {category.charAt(0).toUpperCase() + category.slice(1)} Master
        </span>
      </div>
    );
  };

  return (
    <>
      <DashboardNavbar />
      <div className="badges-container">
        <h1 className="text-4xl font-bold text-center mb-12">Your Badges</h1>
        {levels.map((category) => (
          <div key={category} className="category-section">
            <h2 className="text-2xl font-semibold mb-4 capitalize">
              {category} Level
            </h2>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${getProgress(category)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              {completedLevels[category].length}/{maxLevels} Levels Completed
            </p>
            <div className="badges-grid">
              {renderBadges(category)}
              {renderCategoryBadge(category)}
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  key={level}
                  onClick={() => toggleLevel(category, level)}
                  className={`px-3 py-1 rounded ${
                    completedLevels[category].includes(level)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300'
                  }`}
                >
                  Toggle L{level}
                </button>
              ))}
            </div>
          </div>
        ))}
        {modal.isOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="text-xl font-bold mb-4">
                {modal.badge.category.charAt(0).toUpperCase() +
                  modal.badge.category.slice(1)}{' '}
                {modal.badge.level === 'master' ? 'Master' : `Level ${modal.badge.level}`}
              </h2>
              <p className="mb-4">
                {badgeDescriptions[modal.badge.category][modal.badge.level]}
              </p>
              <p
                className={`mb-4 ${
                  modal.badge.isEarned ? 'text-green-500' : 'text-red-500'
                }`}
              >
                Status: {modal.badge.isEarned ? 'Earned' : 'Not Earned'}
              </p>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Badges;