import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image from '../../src/assets/image.jpg'
import { motion } from 'framer-motion';


const teamMembers = [
    {
        name: "Munawar Sher",
        title: "Director & Chairman",
        description: "Leadership is not about titles, it’s about action and impact — we build futures, not just businesses.",
        email: " contact@graphicblok.com.pk",
        image: image
    },
    {
        name: "Muzaffer Sher",
        title: "Director & Chairman",
        description: "Success grows when we work together with trust, passion, and purpose. That’s the Graphicblok way.",
        email: " contact@graphicblok.com.pk",
        image: image
    },
    {
        name: "Mudassar Sher",
        title: "Director & Chairman",
        description: "Each idea is a seed — with dedication and vision, we turn it into a flourishing legacy.",
        email: " contact@graphicblok.com.pk",
        image: image
    },
    {
        name: "Musharaf Sher",
        title: "Director & Chairman",
        description: "Consistency and commitment are the silent architects of every great achievement.",
        email: "contact@graphicblok.com.pk",
        image: image
    },
    {
        name: "Minhas Sher",
        title: "Founder | CEO, CFO & COO",
        description: "Graphicblok is not just a company — it’s a promise that creativity and ambition can build empires.",
        email: "minhas@graphicblok.com.pk",
        image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1750855971/Minhas_Sher.jpeg_xwwjzq.jpg"
    },
    {
        name: "Sumaira Minhas",
        title: "Co-Founder",
        description: "Behind every masterpiece is a team that believes in turning imagination into reality.",
        email: "contact@graphicblok.com.pk",
        image: image
    },
    {
        name: "Talha Sher",
        title: "Director",
        description: "Innovation begins when we dare to ask: ‘What’s next?’ — and then work fearlessly to answer it.",
        email: " contact@graphicblok.com.pk",
        image: image
    },
    {
        name: "Hamza Sher",
        title: "Director",
        description: "Great companies don’t just deliver services — they inspire, uplift, and redefine standards every day.",
        email: " contact@graphicblok.com.pk",
        image: image
    }
];

const Team = () => {
    return (
        <Container className="my-5">
<img
  src="https://res.cloudinary.com/dwul2hfvj/image/upload/v1750855195/Minhas_Ai_Potrait_fb_cover-06_nddk15.jpg"
  alt="Team Banner"
  style={{
    width: '100vw',
    height: 'auto',
    objectFit: 'cover',
    display: 'block',
    marginLeft: 'calc(-50vw + 50%)',
    maxHeight: '450px'
  }}
/>

            <h2 className='d-flex justify-content-center mt-5'>Our Team</h2>
            <Row>
                
                {teamMembers.map((member, index) => (
                    <Col lg={3} md={6} sm={12} className="mb-4 mt-4" key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <Card className="h-100">
                                <Card.Img variant="top" src={member.image} alt={member.name} />
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
                                    <Card.Text>{member.description}</Card.Text>
                                    <Card.Text className="text-muted"><small>{member.email}</small></Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Team;
