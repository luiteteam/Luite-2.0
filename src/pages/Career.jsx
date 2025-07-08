import React from 'react';

const openRoles = [
  {
    title: 'Web Developer',
    desc: 'Build and maintain modern, high-performance websites for our clients.'
  },
  {
    title: 'UI/UX Designer',
    desc: 'Design beautiful, user-friendly interfaces and experiences.'
  },
  {
    title: 'Project Manager',
    desc: 'Lead digital projects from concept to launch, ensuring client success.'
  },
];

const Career = () => (
  <section id="career" className="section light-background">
    <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 1rem' }}>
      <div className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2>Join Our Team</h2>
        <div className="title-shape" style={{ margin: '1rem auto' }}>
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" width="120">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <p className="lead">We're always looking for passionate, creative, and driven people to join our growing agency. If you want to work on exciting digital projects and grow your career, we'd love to hear from you!</p>
      </div>
      <div className="row g-4" style={{ marginBottom: '2.5rem' }}>
        {openRoles.map((role, idx) => (
          <div className="col-12 col-md-6" key={role.title} style={{ marginBottom: '1.5rem' }}>
            <div className="service-item" style={{ background: 'var(--surface-color)', borderRadius: 8, padding: '2rem', boxShadow: '0 0 20px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{role.title}</h3>
              <p style={{ color: 'var(--default-color)' }}>{role.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="mailto:careers@luite.com" className="btn btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '50px', fontWeight: 500, fontSize: '1rem', background: 'var(--accent-color)', color: 'var(--contrast-color)' }}>
          Apply Now
        </a>
      </div>
    </div>
  </section>
);

export default Career;
