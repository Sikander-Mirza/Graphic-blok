// pages/WebsiteDesign.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";

const DigitalMarketing = () => {

  const [businessName, setBusinessName] = useState(""); // Store business name input

  const handleWhatsAppClick = (title = "") => {
    const phoneNumber = "+923272075510"; // Replace with your phone number
    let message;

    // If title is passed, use the title for the blog section message
    if (title) {
      message = `Hello, I'm interested in your ${title} services. Could you provide more information?`;
    } else {
      message = `Hello, I'm interested in services for my business: ${businessName}. Can you provide more information?`;
    }

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const [visibleDesigns, setVisibleDesigns] = useState(6);

  // Array of design images (replace these with actual image URLs)
  const designs = [
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
  ];

  // Array for blog section content
  const blogSections = [
    {
      title: "Strategic SEO & PPC",
      content: "Boost your online visibility with tailored SEO strategies and cost-effective PPC campaigns that drive targeted traffic and maximize ROI",
      buttonText: "Find a Website",
      image: "https://via.placeholder.com/500x300",
      reverse: false,
    },
    {
      title: "Dynamic Social Media Marketing",
      content: "Engage and grow your audience with compelling social media content and multi-platform campaigns, enhancing brand awareness and loyalty.",
      buttonText: "Create My Website",
      image: "https://via.placeholder.com/500x300",
      reverse: true,
    },
    {
      title: "Content Marketing Excellence",
      content: "Build authority and customer trust with high-quality, SEO-optimized content that engages, informs, and converts.",
      buttonText: "Browse Website Designs",
      image: "https://via.placeholder.com/500x300",
      reverse: false,
    },
    {
      title: "Effective Email Marketing",
      content: "Convert leads into loyal customers through personalized, automated email campaigns that nurture relationships and drive repeat business.",
      buttonText: "Find Your Website",
      image: "https://via.placeholder.com/500x300",
      reverse: true,
    },
    {
      title: "5.	Conversion Rate Optimization (CRO)",
      content: "Enhance user experience and maximize conversions with data-driven strategies, optimized landing pages, and streamlined customer journeys.",
      buttonText: "Start Building",
      image: "https://via.placeholder.com/500x300",
      reverse: false,
    },
  ];

  // Function to handle showing more designs
  const showMoreDesigns = () => {
    setVisibleDesigns((prevVisibleDesigns) => prevVisibleDesigns + 6);
  };

  // Framer Motion animation controls for different sections
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

  return (
    <>
      {/* Website Builder Section */}
      <motion.section
        className="web-dev-service bg-dark text-white py-5"
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <div className="container text-center">
          <motion.h2
            className="mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            style={{marginTop:"7rem"}}
          >
            Transform Your Business with Graphicblok's Digital Marketing Services
          </motion.h2>
          <motion.p
            className="lead mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            
          </motion.p>
          <motion.p
            className="lead mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Elevate Your Brand?
          </motion.p>
          <motion.p
            className="lead mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
Unlock your brand's full potential with Graphicblok’s comprehensive digital marketing solutions. We drive visibility, engagement, and conversions through tailored strategies that deliver measurable results.          </motion.p>

          {/* Search Bar Section */}
          <motion.div
            className="d-flex justify-content-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              type="text"
              className="form-control w-50 me-2"
              placeholder="Enter Your Business Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <button className="btn btn-danger" onClick={() => handleWhatsAppClick()}>
              Start Now
            </button>
          </motion.div>

          {/* <motion.button
            className="btn btn-light mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Or, Upload Your Logo
          </motion.button> */}

          {/* Intro Section */}
          <motion.h4
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{marginTop:"7rem"}}
          >
           Strategic Digital Marketing for Sustainable Growth
          </motion.h4>
          <motion.p
            className="mb-5 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
Our expert digital marketing services are designed to elevate your online presence, connect with your target audience, and boost ROI. Let's fuel your growth with data-driven strategies!          </motion.p>

          {/* Template Showcase */}
          <div className="row" ref={designsRef}>
            {designs.slice(0, visibleDesigns).map((image, index) => (
              <motion.div
                className="col-lg-4 col-md-6 mb-4"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: designsInView ? 1 : 0, y: designsInView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card bg-dark border-0">
                  <img src={image} className="card-img-top" alt="Template" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button to See More Designs */}
          {visibleDesigns < designs.length && (
            <motion.button
              className="btn btn-danger mt-4"
              onClick={showMoreDesigns}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: designsInView ? 1 : 0, y: designsInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: visibleDesigns * 0.1 }}
            >
              See More Designs
            </motion.button>
          )}
        </div>
      </motion.section>

      {/* Blog Section */}
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
            Comprehensive Digital Marketing Solutions by Graphicblok
          </motion.h2>

          {/* Mapping through blogSections array */}
          {blogSections.map((section, index) => (
            <motion.div
              className={`row align-items-center mb-5 ${
                section.reverse ? "flex-md-row-reverse" : ""
              }`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: blogInView ? 1 : 0, y: blogInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="col-md-6">
                <h4>{section.title}</h4>
                <p>{section.content}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleWhatsAppClick(section.title)}
                >
                  {section.buttonText}
                </button>
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
      <Testimonials/>
      <FAQ/>


    </>
  );
};

export default DigitalMarketing;
