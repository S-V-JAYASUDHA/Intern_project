import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-content">
      <div className="logo">
        <h1>Writers Hub</h1>
      </div>
      <div className="nav-and-buttons">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          <Link to="/login"><button id="login">Login</button></Link>
          <Link to="/signup"><button id="signup">Sign Up</button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
