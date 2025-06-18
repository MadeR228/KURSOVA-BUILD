import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = ({ isAuthenticated, userRole, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Logo />
        
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="menu-toggle-line"></span>
          <span className="menu-toggle-line"></span>
          <span className="menu-toggle-line"></span>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/jobs" 
            className={`nav-link primary-btn ${location.pathname === '/jobs' ? 'active-page' : ''}`}
          >
            Вакансії
          </Link>
          
          {isAuthenticated ? (
            <>
              {userRole === 'admin' && (
                <Link 
                  to="/admin" 
                  className={`nav-link primary-btn ${location.pathname.startsWith('/admin') ? 'active-page' : ''}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Адмін панель
                </Link>
              )}
              <button onClick={onLogout} className="nav-link primary-btn">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Вийти
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className={`nav-link primary-btn ${location.pathname === '/login' ? 'active-page' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              Увійти
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 