import React from "react";
import "./Home.css";
import backgroundVideo from "../../src/assets/background.mp4";  
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
                <video autoPlay muted loop className="background-video">
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="head">
                    <h1>CREATIVITY</h1>
                    <h1>IN</h1>
                    <h1>EVERY <span style={{ color: "red" }}>PIXEL</span></h1>
                    <p className="text-white">Transforming Ideas Into Designs</p>
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
