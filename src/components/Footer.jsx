import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container text-center">
        <div className="copyright">
          <p>
            © <span>Copyright</span>{' '}
            <strong className="px-1 sitename">LUITE</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
        </div>

        <div className="social-links d-flex justify-content-center">
          <a href="#"><i className="bi bi-twitter-x"></i></a>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
        </div>

        <div className="credits mt-3">
          Designed by <a href="https://www.luite.in/">LUITE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
