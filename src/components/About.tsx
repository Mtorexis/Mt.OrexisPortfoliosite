import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

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

  return (
    <section id="about" className="about-section">
      <div className="about-top">
        <img 
          src="/image/2gn.png" 
          alt="About GN" 
          className="gn-about" 
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              const header = document.querySelector('.header') as HTMLElement;
              const headerHeight = header ? header.offsetHeight : 0;
              const target = aboutSection.getBoundingClientRect().top + window.scrollY - headerHeight;
              const start = window.scrollY;
              const distance = target - start;
              const duration = 700; // 0.7秒
              let startTime: number | null = null;

              function easeInOutQuad(t: number) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
              }

              function animateScroll(currentTime: number) {
                if (!startTime) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                const easedProgress = easeInOutQuad(progress);
                window.scrollTo(0, start + distance * easedProgress);
                if (progress < 1) {
                  requestAnimationFrame(animateScroll);
                }
              }
              requestAnimationFrame(animateScroll);
            }
          }}
          style={{ cursor: 'pointer' }}
        />
        <div className="about-texts">
          <div className="about-title common-title">ABOUT</div>
          <div className="about-message common-message">
            Hi, My name is Mt.Orexis.<br />
            I am an Artist and Designer from Japan.<br />
            With a background in both fine arts and business,<br />
            I explore creative expressions that bridge personal emotion and social issues.<br />
            Art has always been my way to connect, express, and inspire.
          </div>
        </div>
      </div>
      <div className="about-group">
        <div className="profile-contents">
          <div className="profile-header">
            <div className="profile-title">PROFILE</div>
            <div className="profile-jp">プロフィール</div>
          </div>
          <div className="profile-items">
            <div className="profile-row">
              <span className="profile-label"><span className="label-line"></span>Activity Name</span>
              <span className="profile-value">Mt.Orexis  /əˈrɛksɪs/</span>
            </div>
            <div className="profile-row">
              <span className="profile-label"><span className="label-line"></span>Based in</span>
              <span className="profile-value">Japan　36°01'19.3"N 139°38'40.4"E</span>
            </div>
            <div className="profile-row">
              <span className="profile-label"><span className="label-line"></span>Hobbies</span>
              <span className="profile-value">Contemporary art appreciation, exploring restaurants.</span>
            </div>
            <div className="profile-row">
              <span className="profile-label"><span className="label-line"></span>Education & Career</span>
              <span className="profile-value">
                <ul className="profile-list">
                <li>High School
                  <div className="profile-subtext">Arts-based curriculum (Sculpture / Contemporary Art / Design / Oil Painting), Japan</div>
                </li>
                <li>University
                  <div className="profile-subtext">Faculty of Business Administration, Minor in Data Science, Japan</div>
                </li>
                 <li>Internship
                  <div className="profile-subtext">UI/UX Design Company, Japan</div>
                </li>
                </ul>
              </span>
            </div>
            <div className="profile-row">
              <span className="profile-label"><span className="label-line"></span>Skills</span>
              <span className="profile-value">
                <ul className="profile-list">
                  <li>
                    Design
                    <ul className="skill-list">
                      <li>
                        <span className="skill-name">Canva</span>
                        <span className="stars">
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star">✦</span>
                        </span>
                      </li>
                      <li>
                        <span className="skill-name">PowerPoint</span>
                        <span className="stars">
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star">✦</span>
                        </span>
                      </li>
                      <li>
                        <span className="skill-name">Figma</span>
                        <span className="stars">
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star">✦</span>
                          <span className="star">✦</span>
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Development
                    <ul className="skill-list">
                      <li>
                        <span className="skill-name">WordPress</span>
                        <span className="stars">
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star">✦</span>
                          <span className="star">✦</span>
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Other
                    <ul className="skill-list">
                      <li>
                        <span className="skill-name">Notion</span>
                        <span className="stars">
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star filled">✦</span>
                          <span className="star">✦</span>
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <div className="profile-time">{currentTime}</div>
          <img src="/image/2sign.png" alt="Profile Sign" className="profile-sign" />
        </div>
        <div className="icon-contents">
          <img src="/image/2icon.png" alt="About Icon" className="about-icon" />
        </div>
        <div className="icon-text">“TEXT”</div>
        <div className="image-contents">
          {/* 画像は後で追加予定 */}
        </div>
      </div>
      <div className="history-contents">
        <div className="history-how">
          <div className="history-header">
            <div className="history-title-en">How It All Started</div>
            <div className="history-line"></div>
            <div className="history-title-jp">私のはじまり</div>
          </div>
          <div className="history-barcode">How It All Started</div>
          <div className="history-text">
            My journey into art began when I was in the third grade of elementary school.<br />
            While visiting a small local exhibition with my family, my mother was particularly drawn to a painting. <br />
            Later, I showed her a sketch I had made of that piece.<br />
            She praised it, and I kept drawing the same motif again and again.<br />
            That summer, I entered a new version of that same motif into the school's art competition — and won the gold prize.<br />
            That moment marked the beginning of my creative path.<br />
            As someone who found it hard to express emotions in words, art became the alternative way to communicate.
          </div>
        </div>
        <div className="history-my">
          <div className="history-header">
            <div className="history-title-en">My Journey</div>
            <div className="history-line"></div>
            <div className="history-title-jp">私のみちのり</div>
          </div>
          <div className="history-barcode">My Journey</div>
          <div className="history-text">
            In high school, I joined the art club and explored a variety of media:<br />
            drawing, pastels, watercolor, oil painting, Japanese-style painting, sculpture, and installation art.<br />
            One of the most unforgettable moments was encountering "A Veiled Vestal Virgin" by Raffaelle Monti<br />
            — a work that drew me deeply into the world of three-dimensional expression.<br />
            Over time, I broadened my focus from personal expression to include social issues in my art.<br />
            In my final year of high school, I created a sculpture conveying the tragedy of war.<br />
            It was selected for a prefectural art exhibition — an experience that made me feel the true social power of art.<br />
            That experience prompted me to explore forms of expression that could resonate more deeply with the viewer,<br />
            leading me to expand into the more immersive and unrestricted world of installation art.
          </div>
        </div>
        <div className="history-what">
          <div className="history-header">
            <div className="history-title-en">What I Value</div>
            <div className="history-line"></div>
            <div className="history-title-jp">私のおもい</div>
          </div>
          <div className="history-barcode">What I Value</div>
          <div className="history-text">
            I believe that art has the power to inspire awareness of social issues,
            as well as open up new possibilities for addressing them.
            Through experiential expression, I want to ask questions, stir thought, and spark meaningful dialogue.
            My dream is to help solve social issues through art — to elevate the role of art in Japanese society and foster global cultural exchange.
            To achieve that, I believe it's essential to support emerging artists and help revitalize Japan's art market by creating a more vibrant, sustainable ecosystem.
            Art is more than just "expression." It is about awareness, dialogue, and transformation.
          </div>
        </div>
      </div>
      <img
        src="/image/0linemain02.png"
        alt="line"
        className="about-bottom-line"
      />
    </section>
  );
};

export default About; 