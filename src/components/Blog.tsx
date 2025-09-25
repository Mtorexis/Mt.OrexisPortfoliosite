import { useState, useEffect } from 'react';

const articles = [
  {
    id: 1,
    title: "描いて体感するアートセラピーの力",
    date: "2025/09/20",
    content: "...More　※クリックするとNoteへ遷移します。",
    tag: "#Note"
  },
  {
    id: 2,
    title: "Title02", 
    date: "YYYY/MM/DD",
    content: "記事作成中〜:)",
    tag: "#Design"
  },
  {
    id: 3,
    title: "Title03",
    date: "YYYY/MM/DD", 
    content: "記事作成中〜:)",
    tag: "#Art"
  },
  {
    id: 4,
    title: "Title04",
    date: "YYYY/MM/DD",
    content: "記事作成中〜:)", 
    tag: "#Portfolio"
  },
  {
    id: 5,
    title: "Title05",
    date: "YYYY/MM/DD",
    content: "記事作成中〜:)", 
    tag: "#Blog"
  }
];

function Blog() {
  const [start, setStart] = useState(0);
  const [showNoteEmbed, setShowNoteEmbed] = useState(false);

  // 表示するスライドを3枚だけ切り出す
  const visibleArticles = articles.slice(start, start + 3);

  // noteの埋め込みスクリプトを動的に読み込み
  useEffect(() => {
    if (showNoteEmbed) {
      const script = document.createElement('script');
      script.src = 'https://note.com/scripts/embed.js';
      script.charset = 'utf-8';
      script.async = true;
      document.head.appendChild(script);
      
      return () => {
        // クリーンアップ時にスクリプトを削除
        const existingScript = document.querySelector('script[src="https://note.com/scripts/embed.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [showNoteEmbed]);

  // const canPrev = start > 0;
  // const canNext = start + 3 < slides.length;



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
              {visibleArticles.map((article, idx) => (
                <div className="slide" key={article.id}>
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
                    <div className="slide-title">{article.title}</div>
                      <div className="slide-date">{article.date}</div>
                      <div className="slide-header-line"></div>
                      <div className="slide-tag">{article.tag}</div>
                    </div>
                    <div className="slide-right-item slide-right-line"></div>
                    <div className="slide-right-item">
                      {article.id === 1 ? (
                        <button 
                          onClick={() => setShowNoteEmbed(true)}
                          className="article-link"
                          style={{ 
                            background: 'none', 
                            border: 'none', 
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            color: 'inherit',
                            font: 'inherit'
                          }}
                        >
                          {article.content}
                        </button>
                      ) : (
                        <div className="article-content">
                          {article.content}
                        </div>
                      )}
                    </div>
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

      {/* Note埋め込みモーダル */}
      {showNoteEmbed && (
        <div 
          className="note-modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={() => setShowNoteEmbed(false)}
        >
          <div 
            className="note-modal-content"
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              maxWidth: '90vw',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowNoteEmbed(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
            <iframe 
              className="note-embed" 
              src="https://note.com/embed/notes/n4fdd9e499e9e" 
              style={{
                border: 0, 
                display: 'block', 
                maxWidth: '100%', 
                width: '494px', 
                padding: 0, 
                margin: '10px 0px', 
                position: 'static', 
                visibility: 'visible'
              }} 
              height="400"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog; 