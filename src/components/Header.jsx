import React, { useState } from "react";
import { Link } from "react-scroll"; // for smooth scrolling

const Header = () => {
  const [hover, setHover] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
    marginTop: mobileNavActive ? '1.5rem' : 0,
    width: mobileNavActive ? '100%' : undefined,
    textAlign: mobileNavActive ? 'center' : undefined,
  };

  // Only for mobile: handle dropdown open/close
  const handleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  // Helper to detect mobile (for conditional rendering)

  return (
    <header id="header" className={`header d-flex align-items-center sticky-top${mobileNavActive ? ' mobile-nav-active' : ''}`}> 
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo Left (always left) */}
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0" style={{ flex: '0 0 auto', textDecoration: 'none' }}>
          {/* <img src="/assets/img/logo.webp" alt="Logo" /> */}
          <h1 className="sitename">LUITE</h1>
        </a>

        {/* Hamburger Right (mobile only) */}
        <i
          className="mobile-nav-toggle bi bi-list d-xl-none"
          style={{ cursor: 'pointer', fontSize: 28, marginLeft: 16, zIndex: 10001, order: 2 }}
          onClick={() => setMobileNavActive((v) => !v)}
        ></i>

        {/* Menus Center */}
        <nav id="navmenu" className="navmenu">
          <ul style={{ display: mobileNavActive ? 'block' : 'flex', gap: '2rem', margin: 0, padding: 0, alignItems: 'center', listStyle: 'none' }}>
            <li><a href="/" className="active" style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={() => setMobileNavActive(false)}>Home</a></li>
            <li><a href="/career" style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={() => setMobileNavActive(false)}>Career</a></li>
            <li className="dropdown">
              <a href="#" style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={e => { if (mobileNavActive) { e.preventDefault(); handleDropdown(0); } }}>
                <span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul style={{ display: mobileNavActive ? (openDropdown === 0 ? 'block' : 'none') : undefined }}>
                <li><a href="#" style={{ textDecoration: 'none' }}>Website Development</a></li>
                <li><a href="#" style={{ textDecoration: 'none' }}>App Development</a></li>
                <li><a href="#" style={{ textDecoration: 'none' }}>Web Design</a></li>
                <li><a href="#" style={{ textDecoration: 'none' }}>Graphic Design</a></li>
              </ul>
            </li>
            <li><Link to="portfolio" smooth={true} duration={500} style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={() => setMobileNavActive(false)}>Portfolio</Link></li>
            <li className="dropdown">
              <a href="#" style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={e => { if (mobileNavActive) { e.preventDefault(); handleDropdown(1); } }}>
                <span>About</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul style={{ display: mobileNavActive ? (openDropdown === 1 ? 'block' : 'none') : undefined }}>
                <li><a href="#" style={{ textDecoration: 'none' }}>Overview</a></li>
                <li><a href="#" style={{ textDecoration: 'none' }}>Team</a></li>
              </ul>
            </li>
            {/* Contact Button: only show inside mobile menu */}
            {mobileNavActive && (
              <li style={{ width: '100%' }}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn"
                  style={btnStyle}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => setMobileNavActive(false)}
                >
                  Contact
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Contact Button Right (desktop only) */}
        <div className="d-none d-xl-flex" style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 10002 }}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn"
            style={btnStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setMobileNavActive(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
