import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";
const WebDevelopment = () => {


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
      title: "Custom Website Development",
      content: "Tailored to your business needs, our custom websites combine functionality with aesthetics. We build responsive, high-performance websites that reflect your brand identity and deliver a seamless user experience.",
      buttonText: "Find a Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733751675/WhatsApp_Image_2024-12-07_at_12.29.11_4c3c7925_ixmkfq.jpg",
      reverse: false,
    },
    {
      title: "E-commerce Website Development",
      content: "Boost your online sales with a robust e-commerce platform. We develop feature-rich, secure, and scalable e-commerce websites designed to enhance user experience, streamline transactions, and maximize conversions.",
      buttonText: "Create My Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733751675/WhatsApp_Image_2024-12-07_at_12.29.11_38f34293_lrlkqf.jpg",
      reverse: true,
    },
    {
      title: "CMS Development",
      content: "Easily manage your website content with our custom Content Management System (CMS) solutions. We create intuitive CMS platforms, empowering you to update content, images, and products effortlessly.",
      buttonText: "Browse Website Designs",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733751674/WhatsApp_Image_2024-12-07_at_12.29.11_11dcbbb0_mrq3yr.jpg",
      reverse: false,
    },
    {
      title: "Web Application Development",
      content: "Enhance your business operations with custom web applications. Our team develops scalable and secure web apps tailored to meet your specific business needs, improving efficiency and user engagement.",
      buttonText: "Find Your Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733751678/WhatsApp_Image_2024-12-07_at_12.29.11_71f443ac_bsezov.jpg",
      reverse: true,
    },
    {
      title: "Website Maintenance & Support",
      content: "Keep your website running smoothly with our maintenance and support services. We ensure regular updates, security patches, and performance optimization, so your website remains secure and up-to-date.",
      buttonText: "Start Building",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733751675/WhatsApp_Image_2024-12-07_at_12.29.11_d575bd7c_yn1ymf.jpg",
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
            style={{ marginTop: "7rem" }}
          >
            Elevate Your Business with Graphicblok's Web Development Services
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
Transform your digital presence with Graphicblok’s comprehensive web development solutions. We build powerful, user-friendly, and visually stunning websites that drive engagement, enhance user experience, and support your business goals.          </motion.p>
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



          {/* Intro Section */}
          <motion.h4
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ marginTop: "7rem" }}
          >
            Building Future-Ready Digital Experiences
          </motion.h4>
          <motion.p
            className="mb-5 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
Our expert web development services ensure your website stands out in today’s competitive market. Let's create a dynamic online presence that fuels your growth!
          </motion.p>

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
            Our Web Development Services
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
      <Testimonials />
      <FAQ />


    </>
  );
};

export default WebDevelopment;
