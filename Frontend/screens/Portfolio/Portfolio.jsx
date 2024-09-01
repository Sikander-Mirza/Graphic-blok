import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Testimonials from "../../components/testimonials/Testimonials";
import LogoSlider from "../../components/logoslider/LogoSlider";
import Achievements from "../../components/achievements/Achievements";
import { motion } from 'framer-motion';
import crew from "../../src/assets/crew.jpeg"
import PhoneNumberModal from '../../components/Menucards/PhoneNumberModel'; // Import the PhoneNumberModal component
import axios from 'axios';


const portfolioData = [
  {
    imgSrc: crew,
    title: "Build Your Websites Faster, Better & More Affordable",
    description: "At Aciano Technologies, we provide web development consultancy based on the latest technology supported by advanced frameworks, processes, and expertise. Our web development services will transform your business into a lead generating machine that will boost your revenues.",
  },
  {
    imgSrc: crew,
    title: "Build Your Websites Faster, Better & More Affordable",
    description: "At Aciano Technologies, we provide web development consultancy based on the latest technology supported by advanced frameworks, processes, and expertise. Our web development services will transform your business into a lead generating machine that will boost your revenues.",
  },
  {
    imgSrc: crew,
    title: "Build Your Websites Faster, Better & More Affordable",
    description: "At Aciano Technologies, we provide web development consultancy based on the latest technology supported by advanced frameworks, processes, and expertise. Our web development services will transform your business into a lead generating machine that will boost your revenues.",
  },
  {
    imgSrc: crew,
    title: "Build Your Websites Faster, Better & More Affordable",
    description: "At Aciano Technologies, we provide web development consultancy based on the latest technology supported by advanced frameworks, processes, and expertise. Our web development services will transform your business into a lead generating machine that will boost your revenues.",
  },
  {
    imgSrc: crew,
    title: "Build Your Websites Faster, Better & More Affordable",
    description: "At Aciano Technologies, we provide web development consultancy based on the latest technology supported by advanced frameworks, processes, and expertise. Our web development services will transform your business into a lead generating machine that will boost your revenues.",
  },
  {
    imgSrc: crew,
    title: "Build Your Websites Faster, Better & More Affordable",
    description: "At Aciano Technologies, we provide web development consultancy based on the latest technology supported by advanced frameworks, processes, and expertise. Our web development services will transform your business into a lead generating machine that will boost your revenues.",
  },
  {
    imgSrc: crew,
    title: "Build Your Websites Faster, Better & More Affordable",
    description: "At Aciano Technologies, we provide web development consultancy based on the latest technology supported by advanced frameworks, processes, and expertise. Our web development services will transform your business into a lead generating machine that will boost your revenues.",
  },
  {
    imgSrc: crew,
    title: "Build Your Websites Faster, Better & More Affordable",
    description: "At Aciano Technologies, we provide web development consultancy based on the latest technology supported by advanced frameworks, processes, and expertise. Our web development services will transform your business into a lead generating machine that will boost your revenues.",
  }
];

const PortfolioItem = ({ imgSrc, title, description, reverse, onConsultationClick }) => {
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
            <Button variant="danger" onClick={onConsultationClick} >Get Free Consultation</Button>
          </Col>
        </Row>
      </motion.div>
    );
  };
  
  const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const handleShowModal = (item) => {
      setSelectedItem(item);
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedItem(null);
    };
  
    const handleSendMessage = async (phoneNumber) => {
      const message = `Hello! I'm interested in the service: ${selectedItem.title}. Please contact me.`;
  
      try {
        await axios.post('https://graphicblok-server.vercel.app/send-message', {
          phoneNumber,
          message,
        });
        console.log('Message sent successfully');
        alert('Your order has been placed successfully!'); // Show a pop-up alert
  
      } catch (error) {
        console.error('Error sending WhatsApp message:', error);
      }
  
      setShowModal(false);
    };
  
    return (
      <>
        <Container>
          <h2 className="text-center my-5">Web Development Services</h2>
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
        <Achievements />
  
        <PhoneNumberModal
          show={showModal}
          handleClose={handleCloseModal}
          handleSend={handleSendMessage}
        />
      </>
    );
  };
  
  export default Portfolio;