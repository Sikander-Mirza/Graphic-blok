// pages/WebsiteDesign.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";
// import "./WebsiteDesign.css";
import Slider from 'react-slick';

const SEO = () => {
  const [description, setDescription] = useState(''); // State to hold the description input

  // Function to open WhatsApp with a dynamic message
  const handleWhatsAppClick = (title = "") => {
    const phoneNumber = "+923272075510"; // Replace with your phone number
    let message;

    // If title is passed, use the title for the blog section message
    if (title) {
      message = `Hello, I'm interested in your ${title} services. Could you provide more information?`;
    } else {
      message = `Hello, I'm interested in design services. Here is my design description: ${description}. Can you assist me further?`;
    }

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };
  const logos1 = [
    'https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239596/SEo_Page-12_wdegld.jpg',
    'https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239608/SEo_Page-09_pr0ixe.jpg',
    'https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239597/SEo_Page-14_s3pfdv.jpg',
    'https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239596/SEo_Page-13_tsxg9x.jpg',
    'https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239596/SEo_Page-10_saca6n.jpg',
    'https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239594/SEo_Page-08_emfwqf.jpg',
    'https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239594/SEo_Page-11_s3xc0v.jpg',
    'https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239594/SEo_Page-06_nqzbpd.jpg',
    'https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239594/SEo_Page-07_dhvpug.jpg'
  ];

  const blogSections = [
    {
      title: "On-Page SEO",
      content: "Optimize your website’s content, meta tags, and internal structure to ensure it’s search-engine friendly. We focus on keyword placement, user experience, and content quality to boost your visibility.",
      buttonText: "Find a Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733240010/SEO_Pic-01_cqum7s.jpg",
      reverse: false,
    },
    {
      title: "Off-Page SEO",
      content: "Build a strong online presence with high-quality backlinks, content marketing, and social signals. We enhance your sites authority and credibility across the web to drive consistent traffic.",
      buttonText: "Create My Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239981/SEO_Pic-02_tlv165.jpg",
      reverse: true,
    },
    {
      title: "Technical SEO",
      content: "Ensure your website performs at its best. We address technical aspects like site speed, mobile responsiveness, secure connections, and indexing to make your site easier for search engines to crawl and rank.",
      buttonText: "Browse Website Designs",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733240011/SEO_Pic-03_-_Copy_jj6mp7.jpg",
      reverse: false,
    },
    {
      title: "Local SEO",
      content: "Get noticed by local customers who are ready to buy. We optimize your site for location-based searches, helping you dominate local listings and attract nearby clients.",
      buttonText: "Find Your Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733240011/SEO_Pic-04_ckp5jf.jpg",
      reverse: true,
    },
    {
      title: "Build the ideal website",
      content: "Maximize your online store’s visibility and sales with targeted E-Commerce SEO strategies. We optimize product pages, categories, and descriptions to ensure your store ranks higher in search results, driving more conversions and repeat customers.",
      buttonText: "Start Building",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239980/SEO_Pic-05_wb6xx9.jpg",
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
            <div className="col-md-6 text-start px-5" style={{ marginTop: "6rem" }}>
              <h1 className="mb-3">Unlock Your Website's Full Potential with Our SEO Services</h1>
              <p className="mb-4 text-white">
              At Graphicblok, we understand that visibility is everything in the digital world. Our comprehensive SEO services are designed to enhance your website’s ranking, drive organic traffic, and convert visitors into loyal customers.              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your business name"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} // Capture input
                />
                <button className="btn btn-danger" onClick={() => handleWhatsAppClick()}>
                  Share With Us
                </button>
              </div>
            </div>

            {/* Right Side - Single Image */}
            <div className="col-md-6 text-center">
              <img
                src="https://res.cloudinary.com/dwul2hfvj/image/upload/v1733239597/Pngtree_seo_seo_search_blue_purple_3931351_vstvus.png"
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
        <Slider {...settings1}>
          {logos1.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`Logo ${index}`} className="img-fluid" />
            </div>
          ))}
        </Slider>
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
                  onClick={() => handleWhatsAppClick(section.title)} // Trigger WhatsApp for each section
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
      <Testimonials />
      <FAQ />
    </>
  );
};

export default SEO;
