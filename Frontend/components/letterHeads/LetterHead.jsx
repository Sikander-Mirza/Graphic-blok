import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegFileAlt, FaRegStar, FaRegFileImage, FaPalette, FaFacebookSquare, FaRegCopy, FaRegEdit, FaLifeRing, FaRegSmile } from 'react-icons/fa';
import './Letterhead.css';

// Define animation variants
const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Letterhead = () => {
  const controls = useAnimation();

  // Handle scroll to trigger animation
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionTop = document.getElementById('features-section').offsetTop;

    if (scrollPosition > sectionTop) {
      controls.start('visible');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  // Array of feature data with React Icons
  const features = [
    {
      icon: <FaRegFileAlt />,
      title: "Thousands of Letterhead Templates",
      description: "Choose from thousands of Letterhead templates, customized with your logo colors to match your brand."
    },
    {
      icon: <FaRegStar />,
      title: "Premium Letterhead Designs",
      description: "Every Letterhead in our library is created by professional designers from around the world."
    },
    {
      icon: <FaRegFileImage />,
      title: "All the Files You Need",
      description: "Get high-res files in vector formats ready for sharing or printing."
    },
    {
      icon: <FaPalette />,
      title: "Color and Layout Variations",
      description: "Choose from several layout options and use any color for your Letterhead."
    },
    {
      icon: <FaFacebookSquare />,
      title: "Social Media Templates",
      description: "Create branded social media images to match your Letterhead."
    },
    {
      icon: <FaRegCopy />,
      title: "Brand Identity Templates",
      description: "Get access to letterheads and email signatures matched to your brand colors."
    },
    {
      icon: <FaRegEdit />,
      title: "Unlimited Customization",
      description: "Edit the layout, colors, and fonts on your Letterhead with unlimited edits."
    },
    {
      icon: <FaLifeRing />,
      title: "Support",
      description: "24/7 support from our team of design experts."
    },
    {
      icon: <FaRegSmile />,
      title: "Royalty Free Logos",
      description: "Get a worldwide, irrevocable license to use your logo for any commercial and non-commercial purpose."
    }
  ];

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2>Get started with BrandCrowd's Letterhead maker</h2>
        <p>Enter your business name and we'll start creating Letterheads in seconds...</p>
        <div className="input-group mb-3 mx-auto" style={{ maxWidth: '500px' }}>
          <input type="text" className="form-control" placeholder="Enter your business name" />
          <div className="input-group-append">
            <button className="btn btn-danger" type="button">Generate Letterheads</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features-section" className="row text-center">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <motion.div
              className="icon mb-2"
              style={{ fontSize: '4rem', height: '7rem', color: '#ff6f61' }}
              variants={featureVariants}
              initial="hidden"
              animate={controls}
            >
              {feature.icon}
            </motion.div>
            <h5>{feature.title}</h5>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Letterhead;
