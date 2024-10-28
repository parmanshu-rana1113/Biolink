import React from "react";
import "./Footer.css";
// import googleplay from "./assets/googleplay.png";    
// import appstore from "./assets/appstore.png";     
// import logo from "./assets/logo.png";     
// import twitter from '../../Assets/twitter.png';
// import tiktok from '../../Assets/tiktok.png';
// import yt from '../../Assets/yt.png';
// import insta from '../../Assets/insta.png';
// import loogo from '../../Assets/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="curvy-line">
        <svg viewBox="0 0 1000 50" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(255,0,0)", stopOpacity: 0.5 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(255,0,255)", stopOpacity: 0.5 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0 25 Q 25 0, 50 25 T 100 25 T 150 25 T 200 25 T 250 25 T 300 25 T 350 25 T 400 25 T 450 25 T 500 25 T 550 25 T 600 25 T 650 25 T 700 25 T 750 25 T 800 25 T 850 25 T 900 25 T 950 25 T 1000 25"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="subfooter">
        <div className="forlast">  
        <div className="firstfooter">
          <div className="app-buttons">
            <a href="https://play.google.com/store/apps/details?id=app.biolink&pli=1">
            <img
              alt="Get it on Google Play"
              height="40"
              // src={googleplay}
              width="150"
            /></a>
            <a href="https://apps.apple.com/us/app/bio-link-link-in-bio/id1573294119#?platform=iphone">
            <img
              alt="Download on the App Store"
              height="40"
              // src={appstore}
              width="150"
            /></a>
            
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <a href="#">Features</a>
            <a href="#">Help Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Report</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://x.com/biodotlink">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/biodotlink/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.instagram.com/biodotlink/">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://tiktok.com/@biodotlink">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#">
            {/* <img src={logo} alt="" width="30" height="30" /> */}
          </a>
        </div>
        </div>
        

        {/* Help Button */}
        {/* <div className="help-button"> */}
          {/* <i className="fas fa-question"></i> */}
          {/* <span className="quesmark">?</span> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;