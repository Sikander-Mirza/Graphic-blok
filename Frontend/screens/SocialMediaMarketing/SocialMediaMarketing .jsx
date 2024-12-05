// pages/WebsiteDesign.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";
// import "./WebsiteDesign.css";
import Slider from 'react-slick';

const SocialMediaMarketing = () => {

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
    'https://via.placeholder.com/150x100?text=Logo+1',
    'https://via.placeholder.com/150x100?text=Logo+2',
    'https://via.placeholder.com/150x100?text=Logo+3',
    'https://via.placeholder.com/150x100?text=Logo+4',
    'https://via.placeholder.com/150x100?text=Logo+5',
    'https://via.placeholder.com/150x100?text=Logo+6',
    'https://via.placeholder.com/150x100?text=Logo+7',
    'https://via.placeholder.com/150x100?text=Logo+8',
  ];

  const blogSections = [
    {
      title: "Content Strategy & Planning",
      content: "We develop custom content strategies that align with your business objectives. Our team crafts a content calendar, ensuring timely, relevant, and consistent posts across platforms. This approach helps you stay ahead of trends and keep your audience engaged.",
      buttonText: "Find a Website",
      image: "https://via.placeholder.com/500x300",
      reverse: false,
    },
    {
      title: "Creative Content Creation",
      content: "Our team produces high-quality content, including images, videos, infographics, and written posts. We ensure each piece reflects your brand’s voice and resonates with your target audience, creating content that sparks interest and encourages interaction.",
      buttonText: "Create My Website",
      image: "https://via.placeholder.com/500x300",
      reverse: true,
    },
    {
      title: "Platform-Specific Management",
      content: "We manage your social media presence across various platforms like Instagram, Facebook, LinkedIn, and Twitter. From posting to engaging with followers, we handle everything to ensure your brand maintains a consistent and professional image.",
      buttonText: "Browse Website Designs",
      image: "https://via.placeholder.com/500x300",
      reverse: false,
    },
    {
      title: "Community Engagement & Growth",
      content: "Building relationships with your audience is crucial. We actively manage comments, messages, and interactions to foster community engagement. Our goal is to increase your followers, drive discussions, and convert followers into loyal customers.",
      buttonText: "Find Your Website",
      image: "https://via.placeholder.com/500x300",
      reverse: true,
    },
    {
      title: "Performance Analytics & Reporting",
      content: "We continuously track your social media performance using detailed analytics. Our team provides monthly reports to measure the success of your campaigns, including growth metrics, engagement rates, and ROI, helping you understand your audience and adjust strategies accordingly.",
      buttonText: "Start Building",
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
            <div className="col-md-6 text-start px-5" style={{ marginTop: "6rem" }}>
              <h1 className="mb-3">Social Media Management Services by Graphicblok</h1>
              <p className="mb-4 text-white">
              At Graphicblok, we help you build a compelling social media presence that resonates with your audience. Our social media management and content creation services are designed to enhance engagement, boost brand visibility, and drive business growth. Whether you're a startup or an established brand, we tailor our approach to meet your specific needs. With a focus on creativity, strategy, and analytics, we ensure your social media platforms deliver results that matter.              </p>
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
Social Media Management & Content Creation Services:          </motion.h2>

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

export default SocialMediaMarketing;
