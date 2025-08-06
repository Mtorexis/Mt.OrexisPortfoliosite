import React, { useState, useEffect, useRef } from 'react';
import Navigation from './Navigation';

const Home: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [loading, setLoading] = useState<number>(10);
  const homeSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const japanTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
      setCurrentTime(`JP - ${japanTime}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateHomeHeight = () => {
      const homeSection = homeSectionRef.current;
      
      if (homeSection) {
        // headerが固定位置なので、homeセクションは画面全体の高さを使用
        const windowHeight = window.innerHeight;
        homeSection.style.height = `${windowHeight}px`;
      }
    };

    updateHomeHeight();
    window.addEventListener('resize', updateHomeHeight);

    return () => window.removeEventListener('resize', updateHomeHeight);
  }, []);

  // Loading数値のアニメーション
  useEffect(() => {
    if (loading < 100) {
      const timer = setTimeout(() => setLoading(loading + 10), 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <section id="home" className="home-section" ref={homeSectionRef}>
      <Navigation />
      <div className="home-content">
        <img src="/image/1logo.png" alt="Logo" className="home-logo" />
        <div className="home-text-box">
          <p className="home-text">
            Welcome to Mt.Orexis Portfolio Web Site,<br />
            where you can explore a curated blend of ideas, visuals, and expressions<br />
            that reflect my creative journey.<br />
            Inspiring your ideas to bloom and connect.
          </p>
        </div>
        <div className="location-info">
          <div className="time-location-row">
            <p className="loc-japantime">{currentTime}</p>
            <p className="loc-coordinates">36°01'19.3"N 139°38'40.4"E</p>
          </div>
        </div>
        <img src="/image/1pic.png" alt="Pic01" className="home-pic1" />
        <div className="explore-wrapper">
          <img 
            src="/image/1explore.png" 
            alt="Explore" 
            className="explore-image" 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                const header = document.querySelector('.header') as HTMLElement;
                const headerHeight = header ? header.offsetHeight : 0;
                const top = aboutSection.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            style={{ cursor: 'pointer' }}
          />
          <span className="explore-text">EXPLORE</span>
        </div>
      </div>
      <div className="loading-indicator">Loading-{loading}%</div>
      <img src="/image/0linemain02.png" alt="BottomLine" className="home-bottom-line" />
    </section>
  );
};

export default Home; 