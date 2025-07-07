import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const [formStatus, setFormStatus] = useState({ loading: false, sent: false, error: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, sent: false, error: '' });

    // Simulate async submit (replace with actual API call later)
    setTimeout(() => {
      setFormStatus({ loading: false, sent: true, error: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="contact section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="200">
              <div className="section-category mb-3">Contact</div>
              <h2 className="display-5 mb-4">Nemo enim ipsam voluptatem quia voluptas aspernatur</h2>
              <p className="lead mb-4">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam.
              </p>

              <div className="contact-info mt-5">
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-envelope-at me-3"></i>
                  <span>info@example.com</span>
                </div>

                <div className="info-item d-flex mb-3">
                  <i className="bi bi-telephone me-3"></i>
                  <span>+1 5589 55488 558</span>
                </div>

                <div className="info-item d-flex mb-4">
                  <i className="bi bi-geo-alt me-3"></i>
                  <span>A108 Adam Street, New York, NY 535022</span>
                </div>

                <a href="#" className="map-link d-inline-flex align-items-center">
                  Open Map
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="contact-form card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-body p-4 p-lg-5">
                <form className="php-email-form" onSubmit={handleSubmit}>
                  <div className="row gy-4">
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      {formStatus.loading && <div className="loading">Loading...</div>}
                      {formStatus.error && (
                        <div className="error-message">{formStatus.error}</div>
                      )}
                      {formStatus.sent && (
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      )}

                      <button type="submit" className="btn btn-submit w-100">
                        Submit Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
