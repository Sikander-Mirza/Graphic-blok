import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";

const DataScrapping = () => {

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
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661623/WhatsApp_Image_2024-12-07_at_11.57.19_f31806a4_swnqis.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661622/WhatsApp_Image_2024-12-07_at_11.57.19_caa3806a_jfu9kv.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661614/WhatsApp_Image_2024-12-07_at_11.57.19_abb7ad44_z4nob0.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661610/WhatsApp_Image_2024-12-07_at_11.57.18_565883ed_ysyljo.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661610/WhatsApp_Image_2024-12-07_at_11.57.18_be51730f_x6qt1n.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661610/WhatsApp_Image_2024-12-07_at_11.57.18_e9f443cc_uwv7vx.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661610/WhatsApp_Image_2024-12-07_at_11.57.19_2d166df9_vujyw7.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661611/WhatsApp_Image_2024-12-07_at_11.57.19_335f8722_vpqbjq.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661606/WhatsApp_Image_2024-12-07_at_11.57.17_6b8eeb8b_marmbf.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661606/WhatsApp_Image_2024-12-07_at_11.57.18_0a3354c7_jyp4st.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661607/WhatsApp_Image_2024-12-07_at_11.57.18_9ab93131_solag4.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733661608/WhatsApp_Image_2024-12-07_at_11.57.18_87106c47_qxvlsa.jpg",

  ];

  // Array for blog section content
  const blogSections = [
    {
      title: "Lead Generation Data",
      content: "Streamline your sales process with high-quality leads extracted from online sources like business directories, LinkedIn, and industry-specific platforms. Identify potential customers, understand their needs, and customize your outreach for maximum impact",
      buttonText: "Find a Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733659819/WhatsApp_Image_2024-12-07_at_11.56.39_9c28f496_lmzi0s.jpg",
      reverse: false,
    },
    {
      title: "Competitor Analysis",
      content: "Gain a competitive edge by analyzing your competitors' strategies, products, pricing models, and customer feedback. Our data collection reveals key insights to help you identify opportunities, forecast trends, and refine your business strategy.",
      buttonText: "Create My Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733659819/WhatsApp_Image_2024-12-07_at_11.56.39_29d760dc_o3nnhh.jpg",
      reverse: true,
    },
    {
      title: "Market Research Data",
      content: "Make informed decisions with accurate market research data. We gather critical insights on industry trends, consumer behavior, and emerging opportunities, providing a comprehensive understanding of your target market and growth areas.",
      buttonText: "Browse Website Designs",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733659819/WhatsApp_Image_2024-12-07_at_11.56.39_7bcb9508_irx5d5.jpg",
      reverse: false,
    },
    {
      title: "E-commerce Data Extraction",
      content: "Enhance your online store with detailed data extraction from top e-commerce platforms. We collect product descriptions, customer reviews, pricing, and inventory details, helping you optimize listings, set competitive prices, and improve customer satisfaction.",
      buttonText: "Find Your Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733659819/WhatsApp_Image_2024-12-07_at_11.56.39_a0e517ba_a8wwe2.jpg",
      reverse: true,
    },
    {
      title: "Contact & Directory Scraping",
      content: "Expand your network with verified contact information from business directories, websites, and public databases. Our contact scraping services deliver accurate lists of potential clients, partners, and suppliers for targeted outreach and efficient growth.",
      buttonText: "Start Building",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733659820/WhatsApp_Image_2024-12-07_at_11.56.40_00415fbd_kzyyxi.jpg",
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
            Maximize Your Business Potential with Graphicblok's Data Scraping Services
          </motion.h2>
          <motion.p
            className="lead mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Launch a beautiful website in minutes
          </motion.p>
          <motion.p
            className="lead mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
Transform raw data into actionable insights with Graphicblok’s comprehensive data scraping solutions. We help businesses harness the power of accurate, clean, and valuable data to drive smarter decisions and sustainable growth.          </motion.p>
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
            Empowering Your Business with Actionable Data Insights
          </motion.h4>
          <motion.p
            className="mb-5 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
Our expert data scraping services deliver tailored insights that empower your business to thrive in a competitive landscape. Let us unlock the true potential of data for you!</motion.p>

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
            Our Data Scraping Services
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

export default DataScrapping;
