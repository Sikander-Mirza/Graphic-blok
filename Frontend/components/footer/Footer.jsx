import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'; 
import Logo from "../../src/assets/FooterLogo.png";
import Master from "../../src/assets/Master.png";
import PayPal from "../../src/assets/Paypal.png";
import UnionPay from "../../src/assets/UnionPay.png";
import Visa from "../../src/assets/Visa.png";
import QR from "../../src/assets/QR.png";
import linktree from "../../src/assets/linktree.png"


const Footer = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const handleEmailClick = () => {
        navigate('/contact');
    };
    const handlePhoneClick = () => {
        const phoneNumber = '+923272075510'; // Phone number with country code
        const message = encodeURIComponent('Hello, I would like to inquire about your services.');
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <footer className="bg-light text-black">
            <Container>
                <Row className="gy-5 gx-5">
                    {/* Logo and Description */}
                    <Col lg={4} md={6} sm={12} className="mb-4 mb-lg-0 text-center text-lg-start">
                        <div className="mt-5 w-75 mx-auto mx-lg-0">
                            <img src={Logo} alt="Graphicblok Logo" className="d-block mx-auto mx-lg-0" style={{ width: '70px', height: '80px' }} />
                            <p className="mb-2 mt-3 logo-description" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                                The Graphicblok team is a diverse and experienced group of professionals with over 5 years of expertise in both international and domestic markets.
                            </p>
                        </div>
                    </Col>


                    {/* Expertise Section 1 */}
                    <Col lg={2} md={3} sm={6} className="text-center text-md-start mb-4 mb-lg-0 ">
                        <h6 style={{ fontSize: '16px', fontWeight: 'bold' }} className='mt-5 fs-5'>Our Services</h6>
                        <ul className="list-unstyled">
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/Graphics-design')}>Graphic Designing</li>
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/Digital-Marketing')}>Digital Marketing</li>
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/Content-CopyWriting')}>CopyWriting</li>
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/Web-Design')}>Web Designing</li>
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/seo')}>SEO</li>
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/Shopify')}>Shopify</li>
                        </ul>
                    </Col>

                    {/* Expertise Section 2 */}
                    <Col lg={2} md={3} sm={6} className="text-center text-md-start mb-4 mb-lg-0 ">
                        <h6 style={{ fontSize: '10px', fontWeight: 'bold' }} className='mt-5 fs-5'>Our Services</h6>
                        <ul className="list-unstyled">
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/Video-Editing')}>Video Editing</li>
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/Social-Media-Marketing')}>Social Media Management</li>
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/Data-Scrapping')}>Data Scraping</li>
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/Virtual-Assistant')}>Virtual Assistant</li>
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/ui-ux-design')}>UI UX Designing</li>
                            <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => navigate('/web-development')}>Web Development</li>
                        </ul>
                    </Col>

                    {/* Contact Information and QR Code */}
                    <Col lg={4} md={12} sm={12} className="text-center text-md-start" >
                        <h6 className="mb-2 mt-5 fs-5" style={{ fontSize: '10px', fontWeight: 'bold' }}>Reach Us</h6>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                            <MdLocationOn className='' size={18} style={{ marginRight: '8px', marginBottom:"36px" }} />
                            <span className='mb-3'>
                                <strong>UAE Office</strong>
                                <br />
                                Hartley Dr, Waterbury, CT 06705
                                <br />
                                
                            </span>
                        </p>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                            <MdLocationOn size={18} style={{ marginRight: '8px',marginBottom:"36px" }} />
                            <span className='mb-3'>
                                <strong>PK Office</strong>
                                <br />
                                L.A.C #01, Mehmoodabad, Karachi (75460)
                                <br />
                                
                            </span>
                        </p>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                            <MdEmail size={18} style={{ marginRight: '8px' }} />
                            <span style={{cursor:"pointer"}} onClick={handleEmailClick}>graphicblok@gmail.com</span>
                        </p>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                            <FaPhoneAlt size={18} style={{ marginRight: '8px' }} />
                            <span style={{cursor:"pointer"}}  onClick={handlePhoneClick}>+92 327 2075510</span>
                        </p>
                    </Col>
                </Row>

                {/* Social Media and Payment Icons */}
                <Row className="text-center">
                    <div className="d-flex justify-content-center justify-content-md-start align-items-start mt-2 mb-1">
                        <img src={QR} alt="QR Code" style={{ width: '80px', height: '80px' }} />
                    </div>
                    <Col md={6} sm={12} className="mb-2 mt-3">
                        <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                            {/* <FaFacebook size={24} style={{ marginRight: '12px', color: '#007bff' }} />
                            <FaInstagram size={24} style={{ marginRight: '12px', color: '#C13584' }} />
                            <FaLinkedin size={24} style={{ color: '#0077b5' }} /> */}
                            <a href="https://igli.me/Graphicblok" target="_blank" rel="noopener noreferrer">
                                <img src={linktree} alt="" style={{ marginRight: '12px', width: '80px', height: '50px' }} />
                            </a>
                        </div>
                    </Col>

                    <Col md={6} sm={12}>
                        <div className="d-flex justify-content-center justify-content-md-end align-items-center" style={{marginTop:"1.95rem"}} >
                            {/* Replacing icons with imported images */}
                            <img src={Visa} alt="Visa" style={{ width: '40px', height: '25px', marginRight: '12px' }} />
                            <img src={Master} alt="MasterCard" style={{ width: '40px', height: '25px', marginRight: '12px' }} />
                            <img src={PayPal} alt="PayPal" style={{ width: '40px', height: '25px', marginRight: '12px' }} />
                            <img src={UnionPay} alt="UnionPay" style={{ width: '50px', height: '35px' }} />
                        </div>
                    </Col>
                 </Row>

                 {/* Footer Bottom */}
                 <Row className="pt-2 border-top text-center text-md-start">
                    <Col md={6} sm={12} className="d-flex justify-content-center justify-content-md-start align-items-center">
                        <small>&copy; 2024 - Graphicblok. All Rights Reserved</small>
                    </Col>
                    <Col md={6} sm={12} className="d-flex justify-content-center justify-content-md-end align-items-center">
                        <div>
                            <a href="#" className="text-dark" style={{ fontSize: '14px' }}>Privacy Policy</a>
                            {" | "}
                            <a href="#" className="text-dark" style={{ fontSize: '14px' }}>Terms & Conditions</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
