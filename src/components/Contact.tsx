import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-top">
        <img 
          src="/image/5gn.png" 
          alt="contact GN" 
          className="gn-contact" 
        />
        <div className="contact-texts">
          <div className="contact-title common-title">CONTACT</div>
          <div className="contact-message common-message">
            I’m always open to new projects, creative conversations, or opportunities to collaborate.
          </div>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-column">
          <div className="contact-leftimage">
           
          </div>
          <div className="contact-text">contact me</div>
          <div className="contact-right">
            <div className="contact-right-inner">
              <div className="contact-direct">
                DIRECT
                <div className="contact-right-item">
                  E-mail
                  <div className="contact-right-square"></div>
                  <div className="contact-right-qrcode"></div>
                  <div className="contact-right-text">info.yuzuyama@gmail.com</div>
                </div>
              </div>
              <div className="contact-socials">
                SOCIALS
                <div className="contact-socials-item">
                  <div className="contact-right-item">
                    Instagram
                    <div className="contact-right-square"></div>
                    <div className="contact-right-qrcode"></div>
                    <div className="contact-right-text">@Mt.Orexsis</div>
                  </div>
                  <div className="contact-right-item">
                    linkedin
                    <div className="contact-right-square"></div>
                    <div className="contact-right-qrcode"></div>
                    <div className="contact-right-text">@text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="line" className="contact-bottom-line" src="/image/0linemain02.png"></img>
      </div>
    </section>
  );
};
 
export default Contact;