import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqItems = [
  {
    question: 'Non consectetur a erat nam at lectus urna duis?',
    answer:
      'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
  },
  {
    question: 'Feugiat scelerisque varius morbi enim nunc faucibus?',
    answer:
      'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices...',
  },
  {
    question: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
    answer:
      'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim...',
  },
  {
    question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
    answer:
      'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices...',
  },
  {
    question: 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
    answer:
      'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in...',
  },
  {
    question: 'Perspiciatis quod quo quos nulla quo illum ullam?',
    answer:
      'Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi...',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="faq section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
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

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{item.question}</h3>
                  <div className="faq-content" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                    <p>{item.answer}</p>
                  </div>
                  <i className={`faq-toggle bi ${activeIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
