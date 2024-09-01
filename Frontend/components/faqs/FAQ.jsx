import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';

const FAQ = () => {
    const [expanded, setExpanded] = useState(Array(8).fill(false));
    const controls = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
                if (isInView) {
                    controls.start({ opacity: 1, y: 0 });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    const toggleExpand = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    const faqs = [
        { question: 'How does Graphicblok approach a new project? ', answer: 'We start with an audit to understand your needs, develop a custom strategy, create tailored content, and then promote your brand to achieve results.' },
        { question: 'Can Graphicblok work with international clients? ', answer: 'Yes, we have extensive experience working with both domestic and international clients, delivering tailored solutions for various markets.' },
        { question: "How can Graphicblok improve my website's SEO?", answer: ': We offer on-page, off-page, technical, and local SEO services to boost visibility and drive organic traffic' },
        { question: "What's the process for getting a custom website design? ", answer: 'We begin with a consultation, followed by design, development, testing, and launch, with ongoing support available' },
        { question: 'What type of content can you create for my brand?', answer: 'We create website copy, blogs, product descriptions, video scripts, and social media content tailored to your audience.' },
        { question: 'How do you ensure ethical data scraping? ', answer: 'We follow legal standards, focusing on publicly available data and respecting privacy policies.' },
        { question: 'How long does it take to complete a project? ', answer: 'Project timelines vary based on scope, but we strive to deliver high-quality results within agreed deadlines' },
        { question: 'What sets Graphicblok apart from other agencies? ', answer: 'Our personalized approach, creativity, and commitment to delivering measurable results set us apart' }
    ];

    return (
        <>
            <h1 style={{display:"flex",justifyContent:"center",marginTop:"3rem",marginBottom:"2rem"}}>FAQ'S</h1>
            <Container>
                <Row ref={ref} className="align-items-start">
                    {faqs.map((faq, index) => (
                        <Col 
                            lg={3} md={4} sm={6} xs={12}  // Adjust the columns for responsiveness
                            key={index} 
                            className="mb-4"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={controls}
                                transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
                            >
                                <Card 
                                    className="h-100 shadow-lg border-0" 
                                    style={{ 
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                                        color: '#333', 
                                        borderRadius: '10px', 
                                        backdropFilter: 'blur(10px)', 
                                        transition: 'transform 0.3s',
                                        padding: '1rem' // Ensure padding for better readability
                                    }}
                                >
                                    <Card.Body>
                                        <Card.Title 
                                            style={{ 
                                                fontWeight: 'bold', 
                                                color: '#007bff', 
                                                fontSize: '1.1rem', // Font size responsive adjustment
                                                textAlign: 'center' // Centering the title
                                            }}
                                        >
                                            {faq.question}
                                        </Card.Title>
                                        <Card.Text style={{ color: '#555', fontSize: '0.9rem' }}>
                                            {expanded[index] ? faq.answer : `${faq.answer.substring(0, 50)}...`}
                                        </Card.Text>
                                        <Button 
                                            variant="link" 
                                            onClick={() => toggleExpand(index)} 
                                            style={{ 
                                                color: '#007bff', 
                                                fontWeight: 'bold', 
                                                textDecoration: 'none', 
                                                paddingLeft: '0' 
                                            }}
                                        >
                                            {expanded[index] ? 'Show Less' : 'Read More'}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default FAQ;
