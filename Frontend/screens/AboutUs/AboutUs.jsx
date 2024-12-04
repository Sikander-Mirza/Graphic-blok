import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Aim from "../../src/assets/Aim.jpg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Team from "../../components/team/Team";
import WhoWeAre from "../../components/who-we/WhoWeAre";
import Mission from "../../src/assets/Mission.jpg";
import Vision from "../../src/assets/Vision.jpg";

const AboutUs = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const { ref: firstSectionRef, inView: firstSectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: secondSectionRef, inView: secondSectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: thirdSectionRef, inView: thirdSectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
            <div className="mt-5">
                <WhoWeAre />
            </div>
            <Container className="my-5">
                {/* First Section: Previously Third Section */}
                <Row className="align-items-center mb-5" ref={firstSectionRef}>
                    
                    <Col md={6} className="order-md-1 order-2">
                        <motion.div
                            initial="hidden"
                            animate={thirdSectionInView ? "visible" : "hidden"}
                            variants={fadeInVariants}
                        >
                            <h2 className="text-primary">GraphicBlok</h2>
                            <p>
                            Graphicblok is a dynamic platform offering a vast range of services, including graphic design, digital marketing, SEO, video editing, copywriting, web development and design, e-commerce solutions, and more. Tailored for designers and creatives, our platform features high-quality design assets like templates, icons, and illustrations to empower your projects.
                            From initial idea generation to the final marketing push, we provide a comprehensive suite of services that cover every stage of your brand’s journey. Whether you're conceptualizing ideas, creating stunning visuals, developing compelling content, or executing effective marketing strategies, we have everything you need under one roof. This ensures a seamless and cohesive approach to building and enhancing your brand’s digital presence, making Graphicblok your go-to partner for all your creative and marketing needs                            </p>
                        </motion.div>
                    </Col>
                    <Col md={6} className="order-md-2 order-1">
                        <motion.img
                            src={Aim}
                            alt="Who is Advantage Group International?"
                            className="img-fluid"
                            initial="hidden"
                            animate={thirdSectionInView ? "visible" : "hidden"}
                            variants={fadeInVariants}
                        />
                    </Col>
                </Row>

                {/* Second Section: Previously First Section */}
                <Row className="align-items-center mb-5" ref={secondSectionRef}>
                    <Col md={6} className="order-md-1 order-1">
                        <motion.img
                            src={Vision}
                            alt="Suppliers and Retailers Work Better Together"
                            className="img-fluid"
                            initial="hidden"
                            animate={firstSectionInView ? "visible" : "hidden"}
                            variants={fadeInVariants}
                        />
                    </Col>
                    <Col md={6} className="order-md-2 order-2">
                        <motion.div
                            initial="hidden"
                            animate={firstSectionInView ? "visible" : "hidden"}
                            variants={fadeInVariants}
                        >
                            <h2 className="text-primary">Vision</h2>
                            <p>
                            To be the foremost provider of innovative and comprehensive design and digital marketing services, recognized for our commitment to delivering unparalleled quality and exceeding client expectations at every touchpoint. We aim to set new benchmarks of excellence in the industry, empowering our clients to achieve their business goals through creative, data-driven solutions and a customer-centric approach. Our vision is to continually push the boundaries of what is possible, fostering long-term partnerships built on trust, integrity, and mutual success."                                </p>
                        </motion.div>
                    </Col>
                </Row>

                {/* Third Section: Previously Second Section */}
                <Row className="align-items-center mb-5" ref={thirdSectionRef}>
                    <Col md={6} className="order-md-2 order-1">
                        <motion.img
                            src={Mission}
                            alt="Measuring Engagement"
                            className="img-fluid"
                            initial="hidden"
                            animate={secondSectionInView ? "visible" : "hidden"}
                            variants={fadeInVariants}
                        />
                    </Col>
                    <Col md={6} className="order-md-1 order-2">
                        <motion.div
                            initial="hidden"
                            animate={secondSectionInView ? "visible" : "hidden"}
                            variants={fadeInVariants}
                        >
                            <h2 className="text-primary">Mission Statement</h2>
                            <p>
                            At Graphicblok, we are dedicated to delivering top-tier solutions across design, marketing, SEO, content and copywriting, virtual assistance for business, and social media management. Through innovative approaches, meticulous attention to detail, and a passion for creativity, we aim to transform visions into impactful, lasting brand experiences tailored to the unique needs of each client.                            </p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <Team />
        </>
    );
};

export default AboutUs;
