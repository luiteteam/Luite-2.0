import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const portfolioItems = [
  {
    id: 1,
    category: 'filter-web',
    title: 'Modern Dashboard Interface',
    desc: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.',
    image: '/assets/img/portfolio/portfolio-1.webp',
    gallery: 'portfolio-gallery-web',
  },
  {
    id: 2,
    category: 'filter-graphics',
    title: 'Creative Brand Identity',
    desc: 'Vestibulum id ligula porta felis euismod semper at vulputate.',
    image: '/assets/img/portfolio/portfolio-10.webp',
    gallery: 'portfolio-gallery-graphics',
  },
  {
    id: 3,
    category: 'filter-motion',
    title: 'Product Animation Reel',
    desc: 'Donec ullamcorper nulla non metus auctor fringilla dapibus.',
    image: '/assets/img/portfolio/portfolio-7.webp',
    gallery: 'portfolio-gallery-motion',
  },
  {
    id: 4,
    category: 'filter-brand',
    title: 'Luxury Brand Package',
    desc: 'Aenean lacinia bibendum nulla sed consectetur elit.',
    image: '/assets/img/portfolio/portfolio-4.webp',
    gallery: 'portfolio-gallery-brand',
  },
  {
    id: 5,
    category: 'filter-web',
    title: 'E-commerce Platform',
    desc: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    image: '/assets/img/portfolio/portfolio-2.webp',
    gallery: 'portfolio-gallery-web',
  },
  {
    id: 6,
    category: 'filter-graphics',
    title: 'Digital Art Collection',
    desc: 'Cras mattis consectetur purus sit amet fermentum.',
    image: '/assets/img/portfolio/portfolio-11.webp',
    gallery: 'portfolio-gallery-graphics',
  },
];

const filters = [
  { label: 'All Work', value: '*' },
  { label: 'Web Design', value: 'filter-web' },
  { label: 'Graphics', value: 'filter-graphics' },
  { label: 'Motion', value: 'filter-motion' },
  { label: 'Branding', value: 'filter-brand' },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const filteredItems =
    activeFilter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
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
        {/* Filter Tabs */}
        <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
          <ul className="portfolio-filters isotope-filters">
            {filters.map((filter) => (
              <li
                key={filter.value}
                className={activeFilter === filter.value ? 'filter-active' : ''}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Grid */}
        <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-6 col-md-6 portfolio-item isotope-item ${item.category}`}
            >
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={item.image} className="img-fluid" alt={item.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a
                        href={item.image}
                        className="glightbox preview-link"
                        data-gallery={item.gallery}
                      >
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="portfolio-details.html" className="details-link">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">{item.category.replace('filter-', '')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
