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
        Graphicblok is a dynamic platform offering a vast range of services, including graphic design, digital marketing, SEO, video editing, copywriting, web development and design, e-commerce solutions, and more. Tailored for designers and creatives, our platform features high-quality design assets like templates, icons, and illustrations to empower your projects.
From initial idea generation to the final marketing push, we provide a comprehensive suite of services that cover every stage of your brand’s journey. Whether you're conceptualizing ideas, creating stunning visuals, developing compelling content, or executing effective marketing strategies, we have everything you need under one roof. This ensures a seamless and cohesive approach to building and enhancing your brand’s digital presence, making Graphicblok your go-to partner for all your creative and marketing needs.
        </p>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
