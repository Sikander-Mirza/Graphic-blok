import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";
import "./GraphicsDesign.css";
import Slider from 'react-slick';

const GraphicsDesign = () => {


  const blogSections = [
    {
      title: "Brand Identity Creation",
      content: "From logos to brand guidelines, we craft a cohesive identity that tells your brand's story.",
      buttonText: "Find a Website",
      buttonLink: "#",
      image: "https://via.placeholder.com/500x300",
      reverse: false,
    },
    {
      title: "•	Marketing Collateral Design",
      content: ": Flyers, brochures, and banners that captivate and convert.",
      buttonText: "Create My Website",
      buttonLink: "#",
      image: "https://via.placeholder.com/500x300",
      reverse: true,
    },
    {
      title: "•	Custom Illustrations & Infographics",
      content: ": Visuals that simplify complex ideas and enhance engagement.",
      buttonText: "Browse Website Designs",
      buttonLink: "#",
      image: "https://via.placeholder.com/500x300",
      reverse: false,
    },
    {
      title: "•	Packaging & Merchandise Design",
      content: ": Designs that not only protect but also promote your product.",
      buttonText: "Find Your Website",
      buttonLink: "#",
      image: "https://via.placeholder.com/500x300",
      reverse: true,
    },
    {
      title: "Build the ideal website",
      content: "Creating a functional, visually stunning website is effortless with our website builder. From SEO to e-commerce, customize your site with the features that matter most to your business.",
      buttonText: "Start Building",
      buttonLink: "#",
      image: "https://via.placeholder.com/500x300",
      reverse: false,
    },
  ];

  const controls = useAnimation();
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [blogRef, blogInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [designsRef, designsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Trigger animation when section comes into view
  if (sectionInView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }
  if (blogInView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }
  if (designsInView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      {/* Parent Container */}
      <motion.div
        className="container-fluid bg-dark text-white py-5"
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <div className="container">
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Side - Text Content */}
            <div className="col-md-6 text-start px-5" style={{ marginTop: "6rem", height: "22rem" }}>
              <h1 className="mb-3 mt-5">Graphics Designing</h1>
              <p className="mb-4 text-white">
              At Graphicblok, we transform ideas into visually stunning designs that resonate with your target audience. Whether you're looking for a complete brand identity overhaul or a single, impactful design, our team of skilled designers ensures that your brand stands out in the crowded marketplace.
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Describe you design now "
                />
                <button className="btn btn-danger">Share With Us</button>
              </div>
            </div>

            {/* Right Side - Single Image */}
            <div className="col-md-6 text-center">
              <img
                src="combined-image-sample.png"
                alt="Design Preview"
                className="img-fluid"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container text-center py-5">
        {/* Title */}
        <h3 className="mb-4">Make a design ...</h3>

        {/* Carousel */}
        <h2 className="text-center">Our Customers - Set 1</h2>
        <p className='text-center mt-5'>At Graphicblok, we transform ideas into visually stunning designs that resonate with your target audience. Whether you're looking for a complete brand identity overhaul or a single, impactful design, our team of skilled designers ensures that your brand stands out in the crowded marketplace.</p>
      </div>

      <motion.section
        className="blog-section py-5"
        ref={blogRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: blogInView ? 1 : 0, y: blogInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            Craft the perfect website effortlessly with BrandCrowd
          </motion.h2>

          {/* Mapping through blogSections array */}
          {blogSections.map((section, index) => (
            <motion.div
              className={`row align-items-center mb-5 ${section.reverse ? "flex-md-row-reverse" : ""
                }`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: blogInView ? 1 : 0, y: blogInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="col-md-6">
                <h4>{section.title}</h4>
                <p>{section.content}</p>
                <a href={section.buttonLink} className="btn btn-danger">
                  {section.buttonText}
                </a>
              </div>
              <div className="col-md-6">
                <img
                  src={section.image}
                  alt={section.title}
                  className="img-fluid rounded"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Testimonials />
      <FAQ />
    </>
  );
};

export default GraphicsDesign;
