// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ImageSlider from './components/ImageSlider';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CollaborateContent from './components/CollaborateContent';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Footer from './components/Footer';

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
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
              <div className="user-actions">
                <button onClick={() => window.location.href = '/login'}>Login</button>
                <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
              </div>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Signup" element={<SignupPage />} />
            {/* Add signup route if needed */}
          </Routes>
          {window.location.pathname !== '/signup' && <Footer />}
          
        </main>
        
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

const HomePage = () => {
  return (
    <div>
      <ImageSlider />
      <CollaborateContent />
     
    </div>
  );
};

export default App;
