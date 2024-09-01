import React from "react";
import { FaLaptopCode, FaShopify, FaMobileAlt, FaSearch, FaBullhorn, FaChartLine, FaEnvelopeOpenText } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation
import "./NewServices.css";

const serviceData = [
  {
    title: "Data Scrapping",
    icon: <FaSearch />,
    items: ["Precision Data Extraction","Uncover Hidden Insights", "Optimize Decision-Making"],
    route: "/Data-Scrapping",
  },
  {
    title: "Virtual Assistant",
    icon: <FaBullhorn />,
    items: ["Seamless Task Management" , "Efficient Remote Support" , "Boost Productivity"],
    route: "/Virtual-Assistant",
  },
  {
    title: "UI UX Designing",
    icon: <FaChartLine />,
    items: ["Intuitive User Experiences ", "Innovative Interface Design" ," Enhance User Engagement"],
    route: "/ui-ux-design",
  },
  {
    title: "Web Development",
    icon: <FaEnvelopeOpenText />,
    items: ["Robust Web Solutions ", "Custom Functionalities Delivered" , "Scalable Digital Platforms"],
    route: "/web-development",
  },
];

const NewServices = () => {
  const animationControls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate(); // Use useNavigate for navigation

  React.useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    }
  }, [animationControls, inView]);

  const cardAnimationVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleCardClick = (route) => {
    navigate(route); // Use navigate instead of history.push
  };

  return (
    <div className="new-services-section">
      <h3 className="new-services-heading">Our New Services</h3>
      <div className="new-services-grid" ref={ref}>
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            className="new-service-card"
            initial="hidden"
            animate={animationControls}
            variants={cardAnimationVariants}
            custom={index % 2 === 0 ? -100 : 100}
            onClick={() => handleCardClick(service.route)} // Handle click event
          >
            <div className="new-service-icon">{service.icon}</div>
            <h5 className="new-service-title text-center">{service.title}</h5>
            <ul className="new-service-list">
              {service.items.map((item, idx) => (
                <li key={idx} className="new-service-item">
                  <span className="new-service-bullet">•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewServices;
