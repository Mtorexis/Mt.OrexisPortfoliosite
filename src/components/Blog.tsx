import { useState } from 'react';

const slides = [
  "スライド1の内容",
  "スライド2の内容",
  "スライド3の内容",
  "スライド4の内容",
  "スライド5の内容"
];

function Blog() {
  const [start, setStart] = useState(0);

  // 表示するスライドを3枚だけ切り出す
  const visibleSlides = slides.slice(start, start + 3);

  const canPrev = start > 0;
  const canNext = start + 3 < slides.length;



  return (
    <section id="blog" className="blog-section">
      <div className="blog-top">
        <img 
          src="/image/4gn.png" 
          alt="blog GN" 
          className="gn-blog" 
        />
        <div className="blog-texts">
          <div className="blog-title common-title">BLOG</div>
          <div className="blog-message common-message">
            <span className="blog-subtitle">Art Diary & Insights</span><br />
            A space to share thoughts on art, design, and everything in between.
          </div>
        </div>
      </div>

      <div className="blog-content">
        <img src="/image/4image.png" alt="Blog Image" className="blog-image" />
        <div className="blog-articles">
        <div className="article-bars">
            {/* 1. 4rem #581D1D の横線 */}
            <div className="article-bar-line line-581D1D"></div>
            {/* 2. 4starG.png */}
            <img src="/image/4starG.png" alt="starG" className="article-bar-imgG" />
            {/* 3. 3rem #7B2E2E の横線 */}
            <div className="article-bar-line line-7B2E2E"></div>
            {/* 4. 4starR.png */}
            <img src="/image/4starR.png" alt="starR" className="article-bar-imgR" />
            {/* 5. 1rem #A97443 の横線 */}
            <div className="article-bar-line line-A97443"></div>
            {/* 6. 4commetside.png */}
            <img src="/image/4commetside.png" alt="commetside" className="article-bar-imgC" />
            {/* 7. 1rem #A97443 の横線 */}
            <div className="article-bar-line line-A97443"></div>
            {/* 9. 4starR.png */}
            <img src="/image/4starR.png" alt="starR" className="article-bar-imgR" />
            {/* 8. 3rem #7B2E2E の横線 */}
            <div className="article-bar-line line-7B2E2E"></div>
            {/* 2. 4starG.png */}
            <img src="/image/4starG.png" alt="starG" className="article-bar-imgG" />
            {/* 10. 4rem #581D1D の横線 */}
            <div className="article-bar-line line-581D1D"></div>
          </div>
          <div className="article-contents">
            <div className="vertical-slider">
              {/* 上部インジケーター */}
              <div className="slider-controls">
                {Array.from({length: 3}, (_, i) => (
                  <div
                    key={i}
                    className="slider-bar-clickarea"
                    onClick={() => setStart(i)}
                    tabIndex={0} // キーボード操作も可能にしたい場合
                    role="button"
                    style={{outline: "none"}}
                  >
                    <div
                      className={`slider-bar${start === i ? ' active' : ''} slider-bar-${i + 1}`}
                    ></div>
                  </div>
                ))}
              </div>
              {/* スライド本体 */}
              {visibleSlides.map((content, idx) => (
                <div className="slide" key={idx}>
                  <div className="slide-left">
                    <img src="/image/4articleimage.png" className="slide-leftimage" />
                    <div className="slide-left-circle"></div>
                    <img src="/image/4commet.png" alt="Commet" className="slide-left-commet" />
                    <div className="slide-left-number">
                      {`No.${start + idx + 1}`}
                    </div>
                  </div>
                  <div className="slide-center-line"></div>
                  <div className="slide-right">
                    <div className="slide-right-header">
                      <div className="slide-title">Title</div>
                      <div className="slide-date">2024/06/01</div>
                      <div className="slide-header-line"></div>
                      <div className="slide-tag">#Tag</div>
                    </div>
                    <div className="slide-right-item slide-right-line"></div>
                    <div className="slide-right-item">{content}</div>
                  </div>
                </div>
              ))}
              {/* 下部インジケーター */}
              <div className="slider-controls">
                {[2, 1, 0].map((i) => (
                  <div
                    key={i}
                    className="slider-bar-clickarea"
                    onClick={() => setStart(i)}
                    tabIndex={0} // キーボード操作も可能にしたい場合
                    role="button"
                    style={{outline: "none"}}
                  >
                    <div
                      className={`slider-bar${start === i ? ' active' : ''} slider-bar-${i + 1}`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="article-bars">
            {/* 1. 4rem #581D1D の横線 */}
            <div className="article-bar-line line-581D1D"></div>
            {/* 2. 4starG.png */}
            <img src="/image/4starG.png" alt="starG" className="article-bar-imgG" />
            {/* 3. 3rem #7B2E2E の横線 */}
            <div className="article-bar-line line-7B2E2E"></div>
            {/* 4. 4starR.png */}
            <img src="/image/4starR.png" alt="starR" className="article-bar-imgR" />
            {/* 5. 1rem #A97443 の横線 */}
            <div className="article-bar-line line-A97443"></div>
            {/* 6. 4commetside.png */}
            <img src="/image/4commetside.png" alt="commetside" className="article-bar-imgC" />
            {/* 7. 1rem #A97443 の横線 */}
            <div className="article-bar-line line-A97443"></div>
            {/* 9. 4starR.png */}
            <img src="/image/4starR.png" alt="starR" className="article-bar-imgR" />
            {/* 8. 3rem #7B2E2E の横線 */}
            <div className="article-bar-line line-7B2E2E"></div>
            {/* 2. 4starG.png */}
            <img src="/image/4starG.png" alt="starG" className="article-bar-imgG" />
            {/* 10. 4rem #581D1D の横線 */}
            <div className="article-bar-line line-581D1D"></div>
          </div>

        </div>
        <img alt="line" className="blog-bottom-line" src="/image/0linemain01.png"></img>
      </div>
    </section>
  );
}

export default Blog; 