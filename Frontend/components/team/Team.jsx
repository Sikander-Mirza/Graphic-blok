import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image from '../../src/assets/image.jpg'
import { motion } from 'framer-motion';


const teamMembers = [
    {
        name: "Jane Doe",
        title: "CEO & Founder",
        description: "Some text that describes me lorem ipsum lorem.",
        email: "jane@example.com",
        image: image
    },
    {
        name: "Mike Ross",
        title: "Art Director",
        description: "Some text that describes me lorem ipsum lorem.",
        email: "mike@example.com",
        image: image
    },
    {
        name: "John Doe",
        title: "Designer",
        description: "Some text that describes me lorem ipsum lorem.",
        email: "john@example.com",
        image: image
    },
    {
        name: "Anna Smith",
        title: "Developer",
        description: "Some text that describes me lorem ipsum lorem.",
        email: "anna@example.com",
        image: image
    },
    {
        name: "Peter Johnson",
        title: "Marketing Lead",
        description: "Some text that describes me lorem ipsum lorem.",
        email: "peter@example.com",
        image: image
    },
    {
        name: "Emily Davis",
        title: "Sales Manager",
        description: "Some text that describes me lorem ipsum lorem.",
        email: "emily@example.com",
        image: image
    },
    {
        name: "James Williams",
        title: "HR Manager",
        description: "Some text that describes me lorem ipsum lorem.",
        email: "james@example.com",
        image: image
    },
    {
        name: "Laura Brown",
        title: "Operations Head",
        description: "Some text that describes me lorem ipsum lorem.",
        email: "laura@example.com",
        image: image
    }
];

const Team = () => {
    return (
        <Container className="my-5">
            <h2 className='d-flex justify-content-center'>Our Team</h2>
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
