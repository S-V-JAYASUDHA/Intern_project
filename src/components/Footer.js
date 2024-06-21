// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Work of our website goes here...</p>
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
