import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import axios from 'axios';
import PhoneNumberModal from '../Menucards/PhoneNumberModel'; // Import the PhoneNumberModal component
import logo from "../../src/assets/logo.png";
import './NavigationBar.css'; // Import custom CSS for styling

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSend = async (phoneNumber) => {
    const message = `This is a test message sent to ${phoneNumber} from the navigation bar.`;
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
    handleCloseModal();
  };

  return (
    <>
      <div className="red-strip">
        <div className="contact-info">
          <a href="mailto:info@example.com" className="contact-link">
            <FaEnvelope /> graphicblok@gmail.com
          </a>
          <a href="#phone" className="contact-link" onClick={handleOpenModal}>
            <FaPhone /> +92 327 2075510
          </a>
        </div>
      </div>
      <Navbar bg="light" expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <img src={logo} className="navbar-logo" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-nav"> {/* Aligns the Nav to the right */}
              <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/Service" className="nav-link">Service</Nav.Link>
              <Nav.Link as={Link} to="/AboutUs" className="nav-link">About Us</Nav.Link>
              <Nav.Link as={Link} to="/Portfolio" className="nav-link">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/Shop" className="nav-link">Shop</Nav.Link>
              <Nav.Link as={Link} to="/Contact" className="nav-link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Render the PhoneNumberModal */}
      <PhoneNumberModal 
        show={showModal} 
        handleClose={handleCloseModal} 
        handleSend={handleSend} 
      />
    </>
  );
};

export default NavigationBar;
