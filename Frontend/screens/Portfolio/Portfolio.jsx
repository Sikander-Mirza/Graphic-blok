import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Testimonials from "../../components/testimonials/Testimonials";
import LogoSlider from "../../components/logoslider/LogoSlider";
import Achievements from "../../components/achievements/Achievements";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CopyWriting from "../../src/assets/CopyWriting.jpg"
import DataAnalytic from "../../src/assets/DataAnalytic.jpg"
import Graphics from "../../src/assets/Graphics.jpg"
import Marketing from "../../src/assets/Marketing.jpg"
import SEO from "../../src/assets/SEO.jpg"
import Shopify from "../../src/assets/Shopify.jpg"
import VideoEditing from "../../src/assets/VideoEditing.jpg"
import VirtualAssistant from "../../src/assets/VirtualAssistant.jpg"
import UIUX from "../../src/assets/UIUX.jpg"
import SocialMedia from "../../src/assets/SocialMedia.jpg"






const portfolioData = [
  {
    imgSrc: Graphics,
    title: "Graphic Designing",
    description: "Your Brand Deserves to Be Seen. " +
      "Capture attention with visually stunning designs that speak volumes. " +
      "From eye-catching logos to cohesive branding materials, our graphic design services ensure your brand stands out with creativity and professionalism.",
  },

  {
    imgSrc: Marketing,
    title: "Digital Marketing",
    description: "Reach, Engage, Convert." +
      "Take your brand to new heights with digital marketing strategies that drive real results." + "We craft campaigns that not only reach your audience but also convert them into loyal customers, fueling your business growth",
  },
  {
    imgSrc: Shopify,
    title: "E-Commerce/Shopify",
    description: "Transform Browsers into Buyers. Supercharge your online store with our tailored e-commerce and Shopify solutions. From seamless shopping experiences to optimized checkout processes, we help you turn casual visitors into repeat customers."
  },

  {
    imgSrc: SEO,
    title: "SEO",
    description: "Be Found Where It Matters. Elevate your online visibility with our expert SEO services. We optimize your website to rank higher in search engine results, driving more traffic and helping your business shine in a crowded digital landscape.",
  },
  {
    imgSrc: CopyWriting,
    title: "Content & Copywriting",
    description: "Words That Resonate, Stories That Stick. Harness the power of compelling content to connect with your audience. Our content and copywriting services craft narratives that not only inform but also inspire action, building trust and loyalty with every word.",
  },
  {
    imgSrc: VideoEditing,
    title: "Video Editing & Animation",
    description: "Bring Your Vision to Life. Engage your audience with dynamic video content that tells your story. Whether it’s through captivating animations or polished video editing, we create visuals that leave a lasting impression.",
  },
  {
    imgSrc: SocialMedia,
    title: "Social Media Management",
    description: "Stay Relevant, Stay Engaged. Keep your brand top-of-mind with strategic social media management. We handle content creation, scheduling, and community engagement, ensuring your brand stays connected with your audience across platforms.",
  },
  {
    imgSrc: DataAnalytic,
    title: "Data Scraping & Lead Generation",
    description: "Insights That Drive Action. Fuel your business with data-driven decisions. Our data scraping and lead generation services provide you with the valuable insights needed to target the right audience and expand your reach effectively.",
  },
  {
    imgSrc: VirtualAssistant,
    title: "Virtual Assistance",
    description: "Focus on What Matters, Leave the Rest to Us. Streamline your operations with our reliable virtual assistance services. From administrative support to project management, we help you stay organized and focused on your core business.",
  },
  {
    imgSrc: UIUX,
    title: "UI/UX Designing",
    description: "Designing Experiences That Delight. Create digital experiences that users love with our UI/UX design services. We design intuitive interfaces that are not only visually appealing but also provide seamless interactions, making your products a joy to use.",
  },
];


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






const PortfolioItem = ({ imgSrc, title, description, reverse, onConsultationClick }) => {

  const handleWhatsAppClick = () => {
    const phoneNumber = "+923272075510"; // Replace with your phone number
    const message = `Hello, I'm interested in your ${title} services. Could you provide more information?`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  };
  return (
    <motion.div
      className={`my-5`}
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Row className={`align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
        <Col md={6} className="p-5">
          <img src={imgSrc} alt={title} className="img-fluid" />
        </Col>
        <Col md={6} className="p-5">
          <h3>{title}</h3>
          <p>{description}</p>
         <Button variant="danger" onClick={handleWhatsAppClick}>
            Get Free Consultation
          </Button>
        </Col>
      </Row>
    </motion.div>
  );
};

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleDesigns, setVisibleDesigns] = useState(6);

  const controls = useAnimation();
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [blogRef, blogInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [designsRef, designsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [businessName, setBusinessName] = useState(""); // State to hold business name

  const handleWhatsAppClick = () => {
    const phoneNumber = "+923272075510"; // Replace with your phone number
    const message = `Hello, I'm interested in services for my business: ${businessName}. Can you provide more information?`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  }
  // Trigger animation when section comes into view
  React.useEffect(() => {
    if (sectionInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
    if (blogInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
    if (designsInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [sectionInView, blogInView, designsInView, controls]);




  const showMoreDesigns = () => {
    setVisibleDesigns((prev) => prev + 6);
  };

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

 
  return (
    <>
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
            Web Development
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
              value={businessName} // Bind input to state
              onChange={(e) => setBusinessName(e.target.value)} // Update state on input change
            />
            <button className="btn btn-danger" onClick={handleWhatsAppClick}>Start Now</button>
          </motion.div>

          {/* Intro Section */}
          <motion.h4
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ marginTop: "7rem" }}
          >
            Design a website you'll love in an instant. Try it for free!
          </motion.h4>
          <motion.p
            className="mb-5 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            At Graphicblok, we build robust, scalable, and secure websites that serve as powerful tools for your business. From custom development to ongoing support, our web development services ensure your site is optimized for performance, security, and growth.
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
      <Container style={{ marginTop: "4rem" }}>
        <h3 className="text-center my-5">Unlock Your Brand’s Full Potential with Graphicblok</h3>
        <p className="text-center mx-auto my-5 w-75">
          At Graphicblok, we specialize in turning creative ideas into impactful realities. Whether you're building a brand from scratch or enhancing your digital presence, our expert team is here to help you thrive. Explore our comprehensive range of services designed to elevate your brand and drive success in today’s competitive market.
        </p>

        {portfolioData.map((item, index) => (
          <PortfolioItem
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            reverse={index % 2 !== 0}
            onConsultationClick={() => handleShowModal(item)}
          />
        ))}
      </Container>
      <Testimonials />
      <LogoSlider />
      {/* <Achievements /> */}


    </>
  );
};

export default Portfolio;