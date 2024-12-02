// pages/WebsiteDesign.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";


const Shopify = () => {
  const [visibleDesigns, setVisibleDesigns] = useState(6);

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
 
  // Array of design images (replace these with actual image URLs)
  const designs = [
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134313/SHopify_Page-15_yyo0rv.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134312/SHopify_Page-10_iw0vgd.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134312/SHopify_Page-14_fxz4cd.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134312/SHopify_Page-16_hcqcuc.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134311/SHopify_Page-12_yi6qm0.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134310/SHopify_Page-13_a2aejr.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134310/SHopify_Page-11_b6lfpa.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134310/SHopify_Page-05_whsccl.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134309/SHopify_Page-08_oivvo2.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134309/SHopify_Page-07_ppvghz.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134309/SHopify_Page-06_tqhjnq.jpg",
    "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134309/SHopify_Page-09_emrxdz.jpg",
  ];

  // Array for blog section content
  const blogSections = [
    {
      title: "•	Custom Store Development",
      content: "Bring your brand to life with a custom-built online store designed to reflect your unique identity. From layout to functionality, we tailor every element to align with your vision and engage your customers.",
      buttonText: "Find a Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134994/custom_egksdj.jpg",
      reverse: false,
    },
    {
      title: "•	Product Listings & Management",
      content: "Organize and showcase your products with professionally curated listings. Our solutions help you create visually appealing and well-structured catalogs that captivate your audience and drive sales effortlessly.",
      buttonText: "Create My Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134997/listen_mvy0ju.jpg",
      reverse: true,
    },
    {
      title: "•	Payment Gateway Integration",
      content: "Ensure a smooth and secure checkout process with seamless payment gateway integration. We support multiple payment options to offer your customers a hassle-free shopping experience.",
      buttonText: "Browse Website Designs",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134995/Payment_m4ajah.jpg",
      reverse: false,
    },
    {
      title: "•	Performance Optimization",
      content: "Maximize your website's potential with speed and performance enhancements. Our solutions ensure a fast, responsive site that not only attracts visitors but turns them into loyal customers, boosting conversion rates.",
      buttonText: "Find Your Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134996/performance_g9pdog.jpg",
      reverse: true,
    },
    {
      title: "Build the ideal website",
      content: "Create a powerful, visually stunning, and high-performing website that truly represents your brand. Our comprehensive website solutions cover everything from initial design to ongoing optimization. With advanced features and scalable options, your store will be equipped to grow alongside your business, delivering an exceptional experience to every visitor.",
      buttonText: "Start Building",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1733134995/ideal_yzpzd3.jpg",
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
            E-Commerce/Shopify
          </motion.h2>
          <motion.p
            className="lead mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Launch a stunning website effortlessly
          </motion.p>
          <motion.p
            className="lead mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           Whether you're just starting or looking to expand, Graphicblok is your trusted partner in reaching new heights. Let’s connect—schedule your consultation today and discover how we can elevate your brand’s success.
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
           Create a Website You'll Be Proud Of—Quick and Easy!
          </motion.h4>
          <motion.p
            className="mb-5 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Our E-Commerce/Shopify solutions are tailored to provide a seamless shopping experience that boosts sales and fosters customer loyalty. From store setup to performance optimization, we handle every detail so you can focus on growing your business
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
           Create the Perfect E Commerce Store with Ease
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

export default Shopify;
