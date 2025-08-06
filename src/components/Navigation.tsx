import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // aboutセクションの上部に到達したら非表示
        if (scrollY >= aboutTop - windowHeight / 2) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('.header') as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 0;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`side-navigation ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
      <ul className="nav-list">
        <li>
          <button 
            className="nav-item" 
            onClick={() => scrollToSection('home')}
          >
            <span className="nav-prefix">壱</span>HOME
          </button>
        </li>
        <li>
          <button 
            className="nav-item" 
            onClick={() => scrollToSection('about')}
          >
            <span className="nav-prefix">弐</span>ABOUT
          </button>
        </li>
        <li>
          <button 
            className="nav-item" 
            onClick={() => scrollToSection('portfolio')}
          >
            <span className="nav-prefix">参</span>PORTFOLIO
          </button>
        </li>
        <li>
          <button 
            className="nav-item" 
            onClick={() => scrollToSection('blog')}
          >
            <span className="nav-prefix">肆</span>BLOG
          </button>
        </li>
        <li>
          <button 
            className="nav-item" 
            onClick={() => scrollToSection('contact')}
          >
            <span className="nav-prefix">伍</span>CONTACT
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 