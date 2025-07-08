import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" className="about section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <p>
          We’re a newly formed creative agency focused on building fast, user-friendly, and impactful websites for startups, creators, and businesses of all sizes.
        </p>

      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
            <div className="about-image">
              <img
                src="/assets/img/about/about-1.webp"
                alt="Profile"
                className="img-fluid rounded-4"
              />
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <span className="subtitle">About Me</span>
              <h2>We are a passionate team of Web Designers & Developers</h2>
              <p className="lead mb-4">
                We are a fresh and energetic web design agency, founded by a group of 4–5 like-minded designers and developers dedicated to building high-performance, visually striking websites.
              </p>
              <p className="mb-4">
                Whether you're a startup or a growing brand, we help turn your ideas into digital experiences that connect, convert, and inspire.
              </p>

              <div className="personal-info">
                <div className="row g-4">
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Founded</span>
                      <span className="value">2025</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Team Size</span>
                      <span className="value">4–5 Members</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Services</span>
                      <span className="value">Web Design, Development, Branding</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Clients</span>
                      <span className="value">Startups, SMEs, Creators</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="signature mt-4">
                <div className="signature-image">
                  <img
                    src="/assets/img/misc/signature-1.webp"
                    alt="Signature"
                    className="img-fluid"
                  />
                </div>
                <div className="signature-info mt-4">
                  <h4>Team LUITE</h4>
                  <p>Your Creative Web Partner</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
