import React, { useEffect } from 'react';
import { FaCog, FaChartLine, FaPenFancy, FaBullhorn } from 'react-icons/fa'; // Updated icons
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './OurProcess.css';

const steps = [
  {
    title: 'Audit',
    description: 'We dive deep into understanding your brand, identifying strengths, weaknesses, and opportunities for growth',
    icon: <FaCog />, // Icon for Audit
    color: '#4a90e2',
    align: 'left'
  },
  {
    title: 'Strategy',
    description: 'Tailoring a customized plan, we craft a strategy that aligns with your business goals and sets the foundation for impactful results',
    icon: <FaChartLine />, // Icon for Strategy
    color: '#f5a623',
    align: 'right'
  },
  {
    title: 'Content Creation',
    description: 'Our creative experts bring your brand to life with compelling content, innovative designs, and powerful messaging that resonates with your audience',
    icon: <FaPenFancy />, // Updated icon for Content Creation
    color: '#7ed321',
    align: 'left'
  },
  {
    title: 'Promote',
    description: 'We amplify your brand’s voice through targeted promotions, ensuring your message reaches the right audience and drives measurable success',
    icon: <FaBullhorn />, // Updated icon for Promote
    color: '#4a4a4a',
    align: 'right'
  }
];

const OurProcess = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>Our Process</h1>
      <div className="process-container" ref={ref}>
        {steps.map((step, index) => (
          <motion.div
            className={`hexagon-container ${step.align === 'left' ? 'left' : 'right'}`}
            key={index}
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            {step.align === 'right' && (
              <div className="text-content" style={{ color: step.color }}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            )}
            <div className="hexagon-border" style={{ backgroundColor: step.color }}>
              <div className="hexagon">
                <div className="icon" style={{ color: step.color }}>
                  {step.icon}
                </div>
              </div>
            </div>
            {step.align === 'left' && (
              <div className="text-content" style={{ color: step.color }}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default OurProcess;
