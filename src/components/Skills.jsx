import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillsData = [
  {
    title: 'HTML',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    value: 90,
    delay: 100,
  },
  {
    title: 'CSS',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
    value: 95,
    delay: 200,
  },
  {
    title: 'JavaScript',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor.',
    value: 80,
    delay: 300,
  },
  {
    title: 'Photoshop',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
    value: 55,
    delay: 400,
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 skills-animation">
          {skillsData.map((skill, index) => (
            <div
              className="col-md-6 col-lg-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={skill.delay}
            >
              <div className="skill-box">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <span className="text-end d-block">{skill.value}%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.value}%` }}
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
