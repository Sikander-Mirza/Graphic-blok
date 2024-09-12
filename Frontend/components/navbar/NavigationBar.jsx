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
  
  const handleemail=()=> navigate('/contact');

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);



  const handleServiceClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    e.stopPropagation(); // Stop propagation to avoid dropdown interference
    navigate("/service"); // Navigate to /service route
  };

  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your services.");

  return (
    <>
      <div className="red-strip">
        <div className="contact-info">
          <a className="contact-link" onClick={handleemail} style={{cursor:"pointer"}}>
            <FaEnvelope /> graphicblok@gmail.com
          </a>
          <a 
            href={`https://wa.me/923272075510?text=${whatsappMessage}`} 
            className="contact-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
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
                onClick={handleServiceClick}
              >
                {/* Main dropdown item that navigates to /service */}
                <NavDropdown.Item as="button" onClick={handleServiceClick}>
                  Service Overview
                </NavDropdown.Item>
                {/* Dropdown items for individual services */}
                <NavDropdown.Item as={Link} to="/web-development" onClick={(e) => e.stopPropagation()}>
                  Web Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/graphics-design"onClick={(e) => e.stopPropagation()}>
                  Graphic Designing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/digital-marketing"onClick={(e) => e.stopPropagation()}>
                  Digital Marketing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shopify"onClick={(e) => e.stopPropagation()}>
                  Shopify
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/web-design"onClick={(e) => e.stopPropagation()}>
                  Web Designing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/seo"onClick={(e) => e.stopPropagation()}>
                  SEO
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/content-copywriting"onClick={(e) => e.stopPropagation()}>
                  Copywriting
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/video-editing"onClick={(e) => e.stopPropagation()}>
                  Video Editing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/social-media-marketing"onClick={(e) => e.stopPropagation()}>
                  Social Media Marketing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Data-Scrapping"onClick={(e) => e.stopPropagation()}>
                  Data Scraping
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/virtual-assistant"onClick={(e) => e.stopPropagation()}>
                  Virtual Assistant
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ui-ux-design"onClick={(e) => e.stopPropagation()}>
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


    </>
  );
};

export default NavigationBar;
