import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";
const UiUx = () => {

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
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750589/WhatsApp_Image_2024-12-07_at_12.11.53_ca4ddaa0_ibted4.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750616/WhatsApp_Image_2024-12-07_at_12.11.53_74933d06_cyvcwb.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750643/WhatsApp_Image_2024-12-07_at_12.11.54_1be56610_tyrbij.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750675/WhatsApp_Image_2024-12-07_at_12.11.54_36f48bf5_exw3f0.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750716/WhatsApp_Image_2024-12-07_at_12.11.54_e38123e1_i628gx.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750752/WhatsApp_Image_2024-12-07_at_12.11.54_b20609a9_lc89bb.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750852/WhatsApp_Image_2024-12-07_at_12.11.54_7fce5e14_yhhmhq.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750885/2_q9jrtl.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750918/a_wippx5.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750942/s_jgtsti.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750968/d_hgf298.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733751002/f_pniscu.jpg",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
    "https://via.placeholder.com/400x200",
  ];

  // Array for blog section content
  const blogSections = [
    {
      title: "User-Centered Design",
      content: "We prioritize the needs of your users by conducting thorough research and creating designs that resonate with your audience. Our user-centered approach ensures your digital platform is intuitive and easy to navigate",
      buttonText: "Find a Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750365/WhatsApp_Image_2024-12-07_at_12.11.32_37775b31_argfur.jpg",
      reverse: false,
    },
    {
      title: "Responsive Design",
      content: "Reach your audience on any device with our responsive design solutions. We ensure your website or app looks and works flawlessly on desktops, tablets, and smartphones.",
      buttonText: "Create My Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750365/WhatsApp_Image_2024-12-07_at_12.11.32_645e6294_k4t6am.jpg",
      reverse: true,
    },
    {
      title: "Wireframing & Prototyping",
      content: "Bring your ideas to life with detailed wireframes and prototypes. We visualize the structure and flow of your platform, providing you with a clear roadmap before development begins.",
      buttonText: "Browse Website Designs",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750365/WhatsApp_Image_2024-12-07_at_12.11.32_fe3c85da_qhvvid.jpg",
      reverse: false,
    },
    {
      title: "Interaction Design",
      content: "Create memorable experiences with thoughtful interaction design. From smooth transitions to user-friendly buttons and controls, we ensure every interaction on your platform is seamless and engaging.",
      buttonText: "Find Your Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750365/WhatsApp_Image_2024-12-07_at_12.11.32_256f8bc8_m6dgp0.jpg",
      reverse: true,
    },
    {
      title: "Usability Testing & Optimization",
      content: "Refine and improve your digital platform with continuous usability testing and optimization. We gather real user feedback to make informed design decisions that improve functionality and user satisfaction.",
      buttonText: "Start Building",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733750365/WhatsApp_Image_2024-12-07_at_12.11.32_324a7a3f_q43we1.jpg",
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
           UI and UX Designing
          </motion.h2>
          <motion.p
            className="lead mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
Maximize Impact with Graphicblok's UI & UX Designing Services
          </motion.p>
          <motion.p
            className="lead mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
Transform your digital presence with Graphicblok’s UI & UX Designing services. Our expert designers craft seamless user experiences and visually stunning interfaces that elevate your website or app, making it intuitive, engaging, and effective.          </motion.p>
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
Create Engaging Digital Experiences          </motion.h4>
          <motion.p
            className="mb-5 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
Our team specializes in designing interfaces that are not only aesthetically pleasing but also user-friendly. We ensure your users have a smooth and enjoyable journey, enhancing customer satisfaction and retention.</motion.p>

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
            Our UI & UX Designing Services
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

export default UiUx;
