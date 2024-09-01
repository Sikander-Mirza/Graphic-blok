import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Aim from "../../src/assets/Aim.jpg"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Team from "../../components/team/Team";
import WhoWeAre from "../../components/who-we/WhoWeAre";
const AboutUs=()=>{
    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    // Setting up the intersection observer for each section
    const { ref: firstSectionRef, inView: firstSectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: secondSectionRef, inView: secondSectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: thirdSectionRef, inView: thirdSectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
        <WhoWeAre/>
        <Container className="my-5">
            {/* First Section */}
            <Row className="align-items-center mb-5" ref={firstSectionRef}>
                <Col md={6} className="order-md-1 order-2">
                    <motion.img 
                        src={Aim}
                        alt="Suppliers and Retailers Work Better Together" 
                        className="img-fluid"
                        initial="hidden"
                        animate={firstSectionInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                    />
                </Col>
                <Col md={6} className="order-md-2 order-1">
                    <motion.div
                        initial="hidden"
                        animate={firstSectionInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                    >
                        <h2 className="text-primary">Vision</h2>
                        <p>
                        To be the leading provider of high-quality, comprehensive design and digital marketing services, setting new standards of excellence for every client we serve.
                        </p>
                    </motion.div>
                </Col>
            </Row>

            {/* Second Section */}
            <Row className="align-items-center mb-5" ref={secondSectionRef}>
                <Col md={6} className="order-md-2 order-2">
                    <motion.img 
                        src={Aim} 
                        alt="Measuring Engagement" 
                        className="img-fluid"
                        initial="hidden"
                        animate={secondSectionInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                    />
                </Col>
                <Col md={6} className="order-md-1 order-1">
                    <motion.div
                        initial="hidden"
                        animate={secondSectionInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                    >
                        <h2 className="text-primary">Mission Statement</h2>
                        <p>
                        At Graphicblok, we are dedicated to delivering top-tier solutions across design, marketing, SEO, content and copywriting, virtual assistance for business, and social media management. Through innovative approaches, meticulous attention to detail, and a passion for creativity, we aim to transform visions into impactful, lasting brand experiences tailored to the unique needs of each client.
                        </p>
                    </motion.div>
                </Col>
            </Row>

            {/* Third Section */}
            <Row className="align-items-center" ref={thirdSectionRef}>
                <Col md={6} className="order-md-1 order-2">
                    <motion.img 
                        src={Aim} 
                        alt="Who is Advantage Group International?" 
                        className="img-fluid"
                        initial="hidden"
                        animate={thirdSectionInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                    />
                </Col>
                <Col md={6} className="order-md-2 order-1">
                    <motion.div
                        initial="hidden"
                        animate={thirdSectionInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                    >
                        <h2 className="text-primary">Graphic Blog Vision</h2>
                        <p>
                            Advantage Group International helps people and organizations work better together.
                            This section covers the vision to bring suppliers and retailers together.
                        </p>
                    </motion.div>
                </Col>
            </Row>
        </Container>

        <Team/>
        </>
    );
}
export default AboutUs;