import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiPayoneer } from 'react-icons/si';
import { MdLocationOn, MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-light text-black ">
            <Container>
                <Row>
                    {/* Logo and Description */}
                    <Col lg={4} md={6} sm={12} className="text-center text-md-start mb-4 mb-lg-0">
                        <div className="d-flex flex-column align-items-center align-items-md-start mt-5">
                            <img src="path_to_logo" alt="Graphicblok Logo" style={{ width: '150px' }} />
                            <p className="mb-2" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                            The Graphicblok team is a diverse and experienced group of professionals with over 5 years of expertise in both international and domestic markets.  Our commitment to excellence and meticulous attention to detail ensure that every project is executed with precision. Together, we transform ideas into impactful brand experiences, resonating with audiences around the globe.                            </p>
                        </div>
                    </Col>

                    {/* Expertise Section 1 */}
                    <Col lg={2} md={3} sm={6} className="text-center text-md-start mb-4 mb-lg-0">
                        <h6 style={{ fontSize: '16px', fontWeight: 'bold' }} className='mt-5'>Our Expertise</h6>
                        <ul className="list-unstyled">
                            <li className='mt-2'>Services</li>
                            <li className='mt-2'>Services</li>
                            <li className='mt-2'>Services</li>
                            <li className='mt-2'>Services</li>
                            <li className='mt-2'>Services</li>
                            <li className='mt-2'>Services</li>
                        </ul>
                    </Col>

                    {/* Expertise Section 2 */}
                    <Col lg={2} md={3} sm={6} className="text-center text-md-start mb-4 mb-lg-0">
                        <h6 style={{ fontSize: '16px', fontWeight: 'bold' }} className='mt-5'>Our Expertise</h6>
                        <ul className="list-unstyled">
                            <li className='mt-2'>Services</li>
                            <li className='mt-2'>Services</li>
                            <li className='mt-2'>Services</li>
                            <li className='mt-2'>Services</li>
                            <li className='mt-2'>Services</li>
                            <li className='mt-2'>Services</li>
                        </ul>
                    </Col>

                    {/* Contact Information and QR Code */}
                    <Col lg={4} md={12} sm={12} className="text-center text-md-start">
                        <h6 className="mb-2 mt-5" style={{ fontSize: '16px', fontWeight: 'bold' }}>Reach Us</h6>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                            <MdLocationOn size={18} style={{ marginRight: '8px' }} />
                            <span>
                                <strong>UAE Office</strong>
                                <br />
                                1S-91, Liaquat Ashraf Colony#01
                                <br />
                                Mehmoodabad, Karachi, Pakistan 75460
                            </span>
                        </p>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                            <MdLocationOn size={18} style={{ marginRight: '8px' }} />
                            <span>
                                <strong>PK Office</strong>
                                <br />
                                1S-91, Liaquat Ashraf Colony#01
                                <br />
                                Mehmoodabad, Karachi, Pakistan 75460
                            </span>
                        </p>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                            <MdEmail size={18} style={{ marginRight: '8px' }} />
                            <span>graphicblok@gmail.com</span>
                        </p>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                            <FaPhoneAlt size={18} style={{ marginRight: '8px' }} />
                            <span>+92 327 2075510</span>
                        </p>
                    </Col>
                </Row>

                {/* Social Media and Payment Icons */}
                <Row className="text-center">
                    <div className="d-flex justify-content-center justify-content-md-start align-items-start mt-2 mb-1">
                        <img src="path_to_qr_code" alt="QR Code" style={{ width: '70px', height: '70px' }} />
                    </div>
                    <Col md={6} sm={12} className="mb-2">
                        <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                            <FaFacebook size={24} style={{ marginRight: '12px', color: '#007bff' }} />
                            <FaInstagram size={24} style={{ marginRight: '12px', color: '#C13584' }} />
                            <FaLinkedin size={24} style={{ color: '#0077b5' }} />
                        </div>
                    </Col>

                    <Col md={6} sm={12}>
                        <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                            <FaCcVisa size={24} className="mr-2 text-primary" />
                            <SiPayoneer size={24} className="mr-2" style={{ color: '#FF4800' }} />
                            <FaPaypal size={24} className="mr-2" style={{ color: '#003087' }} />
                            <FaCcMastercard size={24} className="mr-2" style={{ color: '#EB001B' }} />
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
