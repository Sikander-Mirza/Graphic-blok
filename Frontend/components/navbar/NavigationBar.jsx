import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import axios from 'axios';
import PhoneNumberModal from '../Menucards/PhoneNumberModel'; // Import the PhoneNumberModal component
import logo from "../../src/assets/Logo.png";
import './NavigationBar.css'; // Import custom CSS for styling

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown state
  const navigate = useNavigate(); // Use navigate instead of history


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

  const handleServiceClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    e.stopPropagation(); // Stop propagation to avoid dropdown interference
    navigate("/service"); // Navigate to /service route
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
              
              {/* Service dropdown with hover functionality */}
              <NavDropdown
      title="Service"
      id="basic-nav-dropdown"
      show={showDropdown}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
      className="custom-dropdown-menu"
    >
      {/* Main dropdown item that navigates to /service */}
      <NavDropdown.Item as="button" onClick={handleServiceClick}>
        Service Overview
      </NavDropdown.Item>
      {/* Dropdown items for individual services */}
      <NavDropdown.Item as={Link} to="/web-development">
        Web Development
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/graphics-design">
        Graphic Designing
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/digital-marketing">
        Digital Marketing
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/shopify">
        Shopify
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/web-design">
        Web Designing
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/seo">
        SEO
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/content-copywriting">
        Copywriting
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/video-editing">
        Video Editing
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/social-media-marketing">
        Social Media Marketing
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/Data-Scrapping">
        Data Scraping
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/virtual-assistant">
        Virtual Assistant
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/ui-ux-design">
        UI/UX Designing
      </NavDropdown.Item>
    </NavDropdown>


  

              
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
