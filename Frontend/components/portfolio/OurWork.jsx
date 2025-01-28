import React from "react";
import { useNavigate } from "react-router-dom";
import portfolio from "../../src/assets/Portfolio-02.png";
import "./OurWork.css"; // Import your CSS file

const OurWork = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleImageClick = () => {
    navigate('/portfolio'); // Navigate to the portfolio route
  };

  return (
    <div className="our-work" style={{marginBottom:"2rem"}}>
      <h1>Our Work</h1>
      <img 
        src={portfolio} 
        alt="Portfolio"
        className="portfolio-image"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default OurWork;
