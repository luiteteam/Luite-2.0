import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const serviceList = [
  {
    icon: 'bi bi-activity',
    title: 'Eget nulla facilisi etiam',
    desc: 'Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla.',
    delay: 200,
  },
  {
    icon: 'bi bi-easel',
    title: 'Duis aute irure dolor',
    desc: 'Auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor.',
    delay: 300,
  },
  {
    icon: 'bi bi-broadcast',
    title: 'Excepteur sint occaecat',
    desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    delay: 400,
  },
  {
    icon: 'bi bi-bounding-box-circles',
    title: 'Tempor incididunt ut labore',
    desc: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
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
        <h2>Services</h2>
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
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur vel illum qui dolorem
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="fw-bold mb-4 servies-title">
              Consectetur adipiscing elit sed do eiusmod tempor
            </h2>
            <p className="mb-4">
              Nulla metus metus ullamcorper vel tincidunt sed euismod nibh volutpat velit class aptent
              taciti sociosqu ad litora.
            </p>
            <a href="#" className="btn btn-outline-primary">
              See all services
            </a>
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
