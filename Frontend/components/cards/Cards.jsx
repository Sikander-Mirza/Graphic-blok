import React from "react";
import { FaLaptopCode, FaShopify, FaMobileAlt, FaSearch, FaBullhorn, FaChartLine, FaEnvelopeOpenText } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom"; // Import Link
import "./cards.css";

const services = [
  {
    title: "Graphic Designing",
    icon: <FaLaptopCode />,
    items: ["Creative Visual Solutions", "Impactful Brand Identity", "Eye-Catching Designs"],
    link: "/Graphics-design", // Add link path
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    items: ["Strategic Online Growth", "Drive Engagement, Leads", "Maximize ROI"],
    link: "/Digital-Marketing", // Add link path
  },
  {
    title: "Shopify",
    icon: <FaShopify />,
    items: ["Seamless Online Stores", "Boost Sales Effortlessly", "Tailored Shopping"],
    link: "/Shopify", // Add link path
  },
  {
    title: "Web Designing",
    icon: <FaLaptopCode />,
    items: ["Responsive & Modern", "User-Friendly Interfaces", "Optimize User Experience"],
    link: "/Web-Design", // Add link path
  },
  {
    title: "SEO",
    icon: <FaSearch />,
    items: ["Rank Higher, Faster", "Organic Traffic Boost", "Visibility & Growth"],
    link: "/seo", // Add link path
  },
  {
    title: "Copywriting",
    icon: <FaEnvelopeOpenText />,
    items: ["Persuasive & Engaging", "Quality Content Creation", "Captivate Your Audience"],
    link: "/Content-CopyWriting", // Add link path
  },
  {
    title: " Video Editing",
    icon: <FaMobileAlt />,
    items: ["Dynamic Visuals", "Professional Editing", "Bring Ideas to Life"],
    link: "/Video-Editing", // Add link path
  },
  {
    title: "Social Media Management",
    icon: <FaChartLine />,
    items: ["Amplify Your Presence", "Engage Your Audience", "Grow Your Following"],
    link: "/Social-Media-Marketing", // Add link path
  },
];

const Cards = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation should only happen once
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="services-section">
      <h3 className="services-heading">Our Services</h3>
      <div className="services-grid" ref={ref}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            custom={index % 2 === 0 ? -100 : 100} // Alternate left and right entry
          >
            <Link to={service.link} className="service-link"> {/* Wrap with Link */}
              <div className="service-icon">
                {service.icon}
              </div>
              <h5 className="service-title text-center">{service.title}</h5>
              <ul className="list-unstyled">
                {service.items.map((item, idx) => (
                  <li key={idx} className="service-item">
                    <span className="text-danger">•</span> {item}
                  </li>
                ))}
              </ul>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
