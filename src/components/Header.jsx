import React, { useState } from "react";
import { Link } from "react-scroll"; // for smooth scrolling

const Header = () => {
  const [hover, setHover] = useState(false);
  const btnStyle = {
    backgroundColor: hover ? '#ffa45c' : '#E87532',
    color: '#fff',
    padding: '0.8rem 2rem',
    borderRadius: '50px',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    boxShadow: hover ? '0 6px 24px rgba(238, 175, 139, 0.18)' : '0 2px 8px rgba(232, 117, 50, 0.08)',
    transform: hover ? 'scale(1.07) translateY(-2px)' : 'none',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo Left */}
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0" style={{ flex: '0 0 auto' }}>
          {/* <img src="/assets/img/logo.webp" alt="Logo" /> */}
          <h1 className="sitename">LUITE</h1>
        </a>

        {/* Menus Center */}
        <nav id="navmenu" className="navmenu" style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'center' }}>
          <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0, alignItems: 'center', listStyle: 'none' }}>
            <li><Link to="hero" smooth={true} duration={500} className="active">Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
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

          </ul>
        </nav>

        {/* Contact Button Right */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn"
            style={btnStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
