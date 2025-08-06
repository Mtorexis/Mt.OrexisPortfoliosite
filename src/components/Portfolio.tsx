import React, { useState } from 'react';

const worksData = [
  {
    title: '01. Title',
    overview: 'Overview',
    year: '2020-2024',
    medium: 'Oil on canvas, Figma',
    description: 'text',
    link: 'https://example.com',
    image: '/image/2icon.png',
  },
  {
    title: '02. Another Work',
    overview: 'Another Overview',
    year: '2018-2020',
    medium: 'Acrylic',
    description: 'another text',
    link: 'https://example.com/2',
    image: '/image/2icon.png',
  },
  // 必要に応じて追加
];

const Portfolio: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const work = worksData[current];

  const goPrev = () => setCurrent((prev) => (prev === 0 ? worksData.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === worksData.length - 1 ? 0 : prev + 1));

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-top">
        <img 
          src="/image/3gn.png" 
          alt="Portfolio GN" 
          className="gn-portfolio" 
        />
        <div className="portfolio-texts">
          <div className="portfolio-title common-title">PORTFOLIO</div>
          <div className="portfolio-message common-message">
            Here you’ll find a collection of my works, ranging from design projects to artistic creations.
          </div>
        </div>
      </div>
      <div className="portfolio-content">
        <img src="/image/3linecom01.png" alt="Portfolio Line" className="portfolio-line" />
        <div className="portfolio-keywork">
          <div className="portfolio-key-title">
            <span className="key-title-main">My Key Works</span>
            <span className="key-title-bar"></span>
            <span className="key-title-category">Category</span>
          </div>
          <div className="portfolio-key-categories">
            <div className="portfolio-key-category">
              <div className="category-title">Design Works</div>
              <div className="category-detail-row">
                <span className="category-vertical-bar"></span>
                <div className="category-detail-content">
                  <div className="category-hashdesc">
                    <div className="category-hashtag">#Presentations</div>
                    <div className="category-description">PowerPoint, Canva</div>
                  </div>
                  <div className="category-hashdesc">
                    <div className="category-hashtag">#Notion</div>
                    <div className="category-description">todolist</div>
                  </div>
                  <div className="category-hashdesc">
                    <div className="category-hashtag">#Post Designs</div>
                    <div className="category-description">Instagram posts, thumbnails, banners, etc.</div>
                  </div>
                  <div className="category-hashdesc">
                    <div className="category-hashtag">#Branding</div>
                    <div className="category-description">logos, business cards, etc.</div>
                  </div>
                  <div className="category-hashdesc">
                    <div className="category-hashtag">#Web Design</div>
                    <div className="category-description">website design</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-key-category">
              <div className="category-title">Art Works</div>
              <div className="category-detail-row">
                <span className="category-vertical-bar"></span>
                <div className="category-detail-content">
                  <div className="category-hashdesc">
                    <div className="category-hashtag">#Drawing</div>
                    <div className="category-description">illustration</div>
                  </div>
                  <div className="category-hashdesc">
                    <div className="category-hashtag">#Painting</div>
                    <div className="category-description">oil painting, etc.</div>
                  </div>
                  <div className="category-hashdesc">
                    <div className="category-hashtag">#Sculpture</div>
                    <div className="category-description">clay, plaster, etc.</div>
                  </div>
                  <div className="category-hashdesc">
                    <div className="category-hashtag">#Installation</div>
                    <div className="category-description">Multimedia Installation, etc.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-key-category">
              <div className="category-title">Photography</div>
              <div className="category-detail-row">
                <span className="category-vertical-bar"></span>
                <div className="category-detail-content">
                  <div className="category-hashdesc">
                    <div className="category-hashtag">#Snap Photography</div>
                    <div className="category-description">illustration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-key-stars">
            <img src="/image/3star.png" alt="3 Star" className="star-image" />
          </div>
        </div>
        <div className="portfolio-works">
          <img src="/image/4adaml.png" alt="Left" className="works-image works-image-left" onClick={goPrev} />
          <div className="works-center">
            <div className="works-contents">
              <div className="works-contents-text">
                <div className="works-title">{work.title}</div>
                <div className="works-double-line-group">
                  <div className="works-double-line"></div>
                  <div className="works-double-line"></div>
                </div>
                <div className="works-overview">{work.overview}</div>
                <div className="works-single-line"></div>
                <div className="works-contents-details">
                  <div className="works-detail-row">
                    <span className="works-detail-label">[Year]</span>
                    <span className="works-detail-value">{work.year}</span>
                  </div>
                  <div className="works-detail-line"></div>
                  <div className="works-detail-row">
                    <span className="works-detail-label">[Medium]</span>
                    <span className="works-detail-value">{work.medium}</span>
                  </div>
                  <div className="works-detail-line"></div>
                  <div className="works-detail-row">
                    <span className="works-detail-label">[Description]</span>
                    <span className="works-detail-value">{work.description}</span>
                  </div>
                  <div className="works-detail-line"></div>
                  <div className="works-detail-row">
                    <span className="works-detail-label">[LINK]</span>
                    <span className="works-detail-value">{work.link}</span>
                  </div>
                  <div className="works-detail-line"></div>
                  <div className="works-detail-row works-download-row">
                    <button className="works-download-btn">DOWNLOAD</button>
                  </div>
                  <div className="works-double-line-group">
                    <div className="works-double-line"></div>
                    <div className="works-double-line"></div>
                  </div>
                </div>
              </div>
              <div className="works-contents-image">
                <img src={work.image} alt="サンプル画像" className="works-main-image" />
              </div>
            </div>
            <div className="works-line"></div>
            <div className="works-footer">
              <span className="works-footer-tag">#Web Design</span>
              <span className="works-footer-more">MORE</span>
            </div>
          </div>
          <img src="/image/4adamr.png" alt="Right" className="works-image works-image-right" onClick={goNext} />
        </div>
        <div className="works-indicators">
          {worksData.map((_, idx) => (
            <span
              key={idx}
              className={`works-indicator${idx === current ? ' active' : ''}`}
            ></span>
          ))}
        </div>
        <img alt="line" className="portfolio-bottom-line" src="/image/0linemain01.png"></img>
      </div>
    </section>
  );
};

export default Portfolio; 