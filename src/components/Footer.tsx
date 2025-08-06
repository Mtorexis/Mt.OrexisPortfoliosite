import React from 'react';

const Footer: React.FC = () => {
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="footer" 
      onClick={scrollToHome}
      style={{ cursor: 'pointer' }}
    >
      <img src="/image/0headfootline.png" alt="Footer Line" className="footer-line" />
      <h2 className="logo-text">Mt.Orexis</h2>
      <div className="footer-cr">Copyright © 2025 Mt.Orexis. All rights reserved.</div>
    </footer>
  );
};

export default Footer; 