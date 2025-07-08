import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUsers, FaHandshake, FaCogs, FaLayerGroup, FaChartLine, FaComments } from 'react-icons/fa';

const reasons = [
  {
    title: 'Expert Team',
    desc: 'Our team consists of experienced developers, designers, and strategists dedicated to delivering top-notch digital solutions.',
    icon: <FaUsers color="#E87532" size={32} />,
    aos: 'fade-up',
    delay: 0,
  },
  {
    title: 'Client-Centric Approach',
    desc: 'We prioritize your business goals and work closely with you to ensure your vision is realized.',
    icon: <FaHandshake color="#E87532" size={32} />,
    aos: 'fade-up',
    delay: 100,
  },
  {
    title: 'Cutting-Edge Technology',
    desc: 'We use the latest tools and technologies to build scalable, secure, and high-performance products.',
    icon: <FaCogs color="#E87532" size={32} />,
    aos: 'fade-up',
    delay: 200,
  },
  {
    title: 'Full-Service Agency',
    desc: 'From web development to branding, we offer a complete suite of digital services under one roof.',
    icon: <FaLayerGroup color="#E87532" size={32} />,
    aos: 'fade-up',
    delay: 300,
  },
  {
    title: 'Proven Results',
    desc: 'Our portfolio and client testimonials speak to our ability to deliver real business value.',
    icon: <FaChartLine color="#E87532" size={32} />,
    aos: 'fade-up',
    delay: 400,
  },
  {
    title: 'Transparent Communication',
    desc: 'We keep you informed at every stage, ensuring a smooth and collaborative process.',
    icon: <FaComments color="#E87532" size={32} />,
    aos: 'fade-up',
    delay: 500,
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" className="about section light-background" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Why Choose Us</h2>
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
          Discover what sets us apart as your digital partner. We combine creativity, technology, and strategy to help your business thrive online.
        </p>

      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px', position: 'relative' }}>
        {/* Background Image Left */}
        <div
          className="about-bg-image d-none d-lg-block"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '50%',
            background: `url('/assets/img/about/about-1.webp') center center/cover no-repeat`,
            borderRadius: '2rem',
            zIndex: 1,
            minHeight: '400px',
          }}
        ></div>
        {/* Centered Content */}
        <div className="about-content" style={{ position: 'relative', zIndex: 2, background: 'rgba(255,255,255,0.95)', borderRadius: '2rem', padding: '3rem 2rem', maxWidth: 1500, margin: '0 auto', width: '100%', textAlign: 'center', boxShadow: '0 0 30px rgba(0,0,0,0.05)' }}>
          <span className="subtitle">Why Choose Us</span>
          <h2>Building Digital Success Together</h2>
          <p className="lead mb-4">
            We are passionate about helping businesses grow through innovative digital solutions and a commitment to excellence.
          </p>
          <div className="personal-info">
            <div className="row g-4" style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
              {reasons.map((reason, idx) => (
                <div
                  className="col-12 col-md-6 col-lg-4"
                  key={reason.title}
                  data-aos={reason.aos}
                  data-aos-delay={reason.delay}
                  style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}
                >
                  <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(232,117,50,0.07)', padding: '2rem 1.5rem', minHeight: 220, width: '100%', maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s', border: '1.5px solid #f3e6de' }}>
                    <div style={{ marginBottom: 18 }}>{reason.icon}</div>
                    <span className="label" style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{reason.title}</span>
                    <span className="value" style={{ color: 'var(--default-color)', fontSize: 16 }}>{reason.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
