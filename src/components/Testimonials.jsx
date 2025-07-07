import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'Saul Goodman',
    role: 'Client',
    title: 'Sed ut perspiciatis unde omnis',
    image: '/assets/img/person/person-m-7.webp',
    paragraphs: [
      'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...',
      'Beatae magnam dolore quia ipsum. Voluptatem totam et qui dolore dignissimos...',
    ],
  },
  {
    name: 'Sara Wilsson',
    role: 'Designer',
    title: 'Nemo enim ipsam voluptatem',
    image: '/assets/img/person/person-f-8.webp',
    paragraphs: [
      'Export tempor illum tamen malis malis eram quae irure esse labore...',
      'Dolorem excepturi esse qui amet maxime quibusdam aut repellendus voluptatum...',
    ],
  },
  {
    name: 'Matt Brandon',
    role: 'Freelancer',
    title: 'Labore nostrum eos impedit',
    image: '/assets/img/person/person-m-9.webp',
    paragraphs: [
      'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos...',
      'Itaque ut explicabo vero occaecati est quam rerum sed...',
    ],
  },
  {
    name: 'Jena Karlis',
    role: 'Store Owner',
    title: 'Impedit dolor facilis nulla',
    image: '/assets/img/person/person-f-10.webp',
    paragraphs: [
      'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla...',
      'Omnis aspernatur accusantium qui delectus praesentium repellendus...',
    ],
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="testimonials" className="testimonials section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
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

      {/* Swiper Slider */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{ delay: 5000 }}
          loop={true}
          speed={600}
          slidesPerView={1}
          className="testimonials-slider"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-item">
                <div className="row">
                  <div className="col-lg-8">
                    <h2>{item.title}</h2>
                    {item.paragraphs.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                    <div className="profile d-flex align-items-center">
                      <img src={item.image} alt={item.name} className="profile-img" />
                      <div className="profile-info">
                        <h3>{item.name}</h3>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="featured-img-wrapper">
                      <img src={item.image} alt={item.name} className="featured-img" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-navigation w-100 d-flex align-items-center justify-content-center">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
