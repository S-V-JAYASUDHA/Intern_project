import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ImageSlider from './components/ImageSlider';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CollaborateContent from './components/CollaborateContent';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="header-content">
            <div className="logo">
              <h1>Writers Hub</h1>
            </div>
            <div className="nav-and-buttons">
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
              <div className="user-actions">
                <button id="login">Login</button>
                <button id="signup">Sign Up</button>
              </div>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ImageSlider />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <CollaborateContent />
        </main>
        <footer>
          <p>Work of our website goes here...</p>
        </footer>
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </div>
    </Router>
  );
}

export default App;
