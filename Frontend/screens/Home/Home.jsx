import React from "react";
import "./Home.css";
import HomeImage from "../../src/assets/HomeImage.jpg"; 
import HomeText from "../../src/assets/Hometext.png";  
import Cards from "../../components/cards/Cards";
import WhoWeAre from "../../components/who-we/WhoWeAre";
import OurWork from "../../components/portfolio/OurWork";
import Testimonials from "../../components/testimonials/Testimonials";
import LogoSlider from "../../components/logoslider/LogoSlider";
import Achievements from "../../components/achievements/Achievements";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <>
            <div className="home-container">
                {/* Home Image with Opacity */}
                <div className="home-image-wrapper">
                    <img src={HomeImage} alt="Home" className="home-image" />
                    {/* Centered Text Over Image */}
                    <div className="home-text-overlay">
                        <img src={HomeText} alt="Home Text" className="home-text" />
                    </div>
                </div>
            </div>
            <Cards/>
            <WhoWeAre/>
            <OurWork/>
            <Testimonials/>
            <LogoSlider/>
            <Achievements/>
            <Contact/>
        </>
    );
}

export default Home;
