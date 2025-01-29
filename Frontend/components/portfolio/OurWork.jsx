import React from "react";
import portfolio from "../../src/assets/Portfolio-02.png";
import "./OurWork.css"; // Import your CSS file

const OurWork = () => {
  const handleImageClick = () => {
    window.open('https://www.behance.net/graphicblok1319', '_blank'); // Open in a new tab
  };

  return (
    <div className="our-work" style={{ marginBottom: "2rem" }}>
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
