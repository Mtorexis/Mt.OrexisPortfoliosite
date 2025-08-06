import React from 'react';

const Header: React.FC = () => {
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <h1 
        className="logo-text" 
        onClick={scrollToHome}
        style={{ cursor: 'pointer' }}
      >
        Mt.Orexis
      </h1>
      <img src="/image/0headfootline.png" alt="Header Line" className="header-line" />
    </header>
  );
};

export default Header; 