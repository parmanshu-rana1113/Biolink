import React from "react";
import "./Navbar.css"; // 
// import logoimg from "./assets/logo.png"; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="firsthalf">
        <div className="logo">
          {/* <img src={logoimg} alt="BIO LINK logo" width="40" height="40" /> */}
        </div>
        <div className="nav-links">
          <a href="#" className="subnavlinks">Features</a>
          <a href="#" className="subnavlinks">FAQ</a>
        </div>
      </div>
      <div className="auth-links">
        <a href="#">Log in</a>
        <a className="signup" href="#">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Navbar;