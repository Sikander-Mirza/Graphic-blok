import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './WhoWeAre.css'; // Import your CSS file

const WhoWeAre = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the section is in view
  });

  return (
    <div className="who-we mt-5" ref={ref}>
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1>Graphicblok</h1>
        <h1>Team</h1>
        <p>
        The Graphicblok team is a diverse and experienced group of professionals with over 5 years of expertise in both international and domestic markets. Our team members specialize in design, digital marketing, SEO, content creation, and web development. With a strong foundation in creativity and innovation, we collaborate closely to deliver exceptional results tailored to each client’s needs. Our commitment to excellence and meticulous attention to detail ensure that every project is executed with precision. Together, we transform ideas into impactful brand experiences, resonating with audiences around the globe.
        </p>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
