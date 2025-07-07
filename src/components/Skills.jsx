import React, { useRef, useEffect } from 'react';
import { FaReact, FaNodeJs, FaAws, FaFigma, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiFlutter, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import './Skills.css'; // Ensure to create or update this CSS for scrolling effect

const icons = [
  { icon: <FaReact color="#61DAFB" />, key: 'react' },
  { icon: <FaNodeJs color="#339933" />, key: 'nodejs' },
  { icon: <FaAws color="#FF9900" />, key: 'aws' },
  { icon: <FaFigma color="#F24E1E" />, key: 'figma' },
  { icon: <FaAngular color="#DD0031" />, key: 'angular' },
  { icon: <FaHtml5 color="#E34F26" />, key: 'html5' },
  { icon: <FaCss3Alt color="#1572B6" />, key: 'css3' },
  { icon: <FaJs color="#F7DF1E" />, key: 'js' },
  { icon: <FaGitAlt color="#F05032" />, key: 'git' },
  { icon: <SiFlutter color="#02569B" />, key: 'flutter' },
  { icon: <SiAdobephotoshop color="#31A8FF" />, key: 'photoshop' },
  { icon: <SiAdobeillustrator color="#FF9A00" />, key: 'illustrator' },
];

const Skills = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;
    let scrollAmount = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Duplicate icons for seamless infinite scroll
  const iconList = [...icons, ...icons];

  return (
    <section id="skills" className="skills section">
      <div className="icon-scroll-container" ref={scrollRef}>
        <div className="icon-row">
          {iconList.map((item, idx) => (
            <span className="tech-icon" key={item.key + idx}>{item.icon}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
