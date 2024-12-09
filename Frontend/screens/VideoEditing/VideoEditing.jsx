// pages/WebsiteDesign.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";

const VideoEditing = () => {
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
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658473/WhatsApp_Image_2024-12-07_at_11.38.32_657e819e_h1sqj1.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658473/WhatsApp_Image_2024-12-07_at_11.38.32_e7b7f4b5_qbka0a.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658472/WhatsApp_Image_2024-12-07_at_11.38.32_a8685c70_dvmpi5.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658473/WhatsApp_Image_2024-12-07_at_11.38.32_d35fd723_ozpf2z.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658473/WhatsApp_Image_2024-12-07_at_11.38.32_f8a9c4e3_nrogms.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658473/WhatsApp_Image_2024-12-07_at_11.38.32_d3cfba3b_bafdcu.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658472/WhatsApp_Image_2024-12-07_at_11.38.32_62b1e1e2_ajx42z.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658472/WhatsApp_Image_2024-12-07_at_11.38.32_11c8e104_zdwgmf.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658472/WhatsApp_Image_2024-12-07_at_11.38.32_46b89e0b_awkuuz.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658471/WhatsApp_Image_2024-12-07_at_11.38.32_59ed959c_gi3lyw.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658472/WhatsApp_Image_2024-12-07_at_11.38.32_3d4e8a3f_cnh0fh.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658471/WhatsApp_Image_2024-12-07_at_11.38.32_a55a208e_zmjve7.jpg",
  ];

  // Array for blog section content
  const blogSections = [
    {
      title: "Corporate & Promotional Videos",
      content: "Professional videos that showcase your brand’s value.",
      buttonText: "Find a Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658814/WhatsApp_Image_2024-12-07_at_11.40.40_3600beec_cwrulj.jpg",
      reverse: false,
    },
    {
      title: "Explainer Videos",
      content: "Clear, concise animations that simplify complex concepts..",
      buttonText: "Create My Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658814/WhatsApp_Image_2024-12-07_at_11.40.40_f0aa69b1_dixrfy.jpg",
      reverse: true,
    },
    {
      title: "Social Media Videos",
      content: "Eye-catching content that engages your audience on social platforms.",
      buttonText: "Browse Website Designs",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658814/WhatsApp_Image_2024-12-07_at_11.40.40_bfa34871_iucsda.jpg",
      reverse: false,
    },
    {
      title: "Post-Production Services",
      content: "Editing, color correction, sound design, and more to make your videos shine.",
      buttonText: "Find Your Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658814/WhatsApp_Image_2024-12-07_at_11.40.40_f36552b8_nygirk.jpg",
      reverse: true,
    },
    {
      title: "Additional Video Services We Offer",
      content: "From capturing vibrant event highlight reels and creating engaging product demo videos to building trust with authentic testimonial and case study videos, we cover all your video needs. Our educational and training videos make complex information easy to understand, while our YouTube and vlog editing ensures your content aligns with your brand identity and captivates your audience. Whether it’s social media, corporate, or personal projects, we bring your vision to life with precision and creativity.",
      buttonText: "Start Building",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733658813/WhatsApp_Image_2024-12-07_at_11.40.40_aaf093e7_mzqox3.jpg",
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
            Video Editing & Animation
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
            No matter the stage of your brand’s journey, Graphicblok is here to partner with you in achieving success. Let’s start a conversation—book your free consultation today and discover how we can help your brand thrive.
          </motion.p>
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
            Design a website you'll love in an instant. Try it for free!
          </motion.h4>
          <motion.p
            className="mb-5 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Bring your ideas to life with our video editing and animation services. Whether it's a promotional video, explainer animation, or social media content, we create visuals that captivate and convert.
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

export default VideoEditing;
