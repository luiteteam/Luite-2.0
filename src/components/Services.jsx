import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const serviceList = [
  {
    icon: 'bi bi-laptop',
    title: 'Website Development',
    desc: 'Custom, responsive, and high-performance websites for your business or brand.',
    delay: 200,
  },
  {
    icon: 'bi bi-phone',
    title: 'App Development',
    desc: 'Mobile app solutions for iOS and Android, tailored to your needs.',
    delay: 300,
  },
  {
    icon: 'bi bi-palette',
    title: 'Web Design',
    desc: 'Modern, user-friendly, and visually stunning web design services.',
    delay: 400,
  },
  {
    icon: 'bi bi-brush',
    title: 'Graphic Design',
    desc: 'Creative graphic design for branding, marketing, and digital presence.',
    delay: 500,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>What we do?</h2>
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
        Empowering your digital presence with tailored, high-quality solutions.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="fw-bold mb-4 servies-title">
            Transforming Ideas into Digital Excellence
            </h2>
            <p className="mb-4">
            We craft customized digital experiences by blending creativity, strategy, and technology to help your brand stand out and drive business growth.
            </p>
          </div>

          <div className="col-lg-8">
            <div className="row g-4">
              {serviceList.map((service, index) => (
                <div
                  key={index}
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                >
                  <div className="service-item">
                    <i className={`${service.icon} icon`}></i>
                    <h3>
                      <a href="service-details.html">{service.title}</a>
                    </h3>
                    <p>{service.desc}</p>
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

export default Services;
