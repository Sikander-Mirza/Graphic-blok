import React from "react";
import "./Home.css";
import backgroundVideo from "../../src/assets/background.mp4";  
import { motion } from "framer-motion";
import Cards from "../../components/cards/Cards";
import WhoWeAre from "../../components/who-we/WhoWeAre";
import OurWork from "../../components/portfolio/OurWork";
import Testimonials from "../../components/testimonials/Testimonials";
import LogoSlider from "../../components/logoslider/LogoSlider";
import Achievements from "../../components/achievements/Achievements";
import Contactform from "../../components/contactform/Contactform";
import Contact from "../Contact/Contact";

const Home = () => {
    const fadeIn = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
  
    return (
        <>
      <div className="home-container">
        <video autoPlay muted loop  className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="head">
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible">
            CREATIVITY
          </motion.h1>
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
            IN
          </motion.h1>
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 1 }}>
            EVERY <span style={{ color: "red" }}>PIXEL</span>
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 1.5 }} className="text-white">
            Transforming Ideas Into Designs
          </motion.p>
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
