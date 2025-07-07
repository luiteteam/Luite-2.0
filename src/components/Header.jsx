import React from "react";
import { Link } from "react-scroll"; // for smooth scrolling

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-between">
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* <img src="/assets/img/logo.webp" alt="Logo" /> */}
          <h1 className="sitename">LUITE</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="hero" smooth={true} duration={500} className="active">Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
            <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
            <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
            <li className="dropdown">
              <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown">
                  <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div className="header-social-links">
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
