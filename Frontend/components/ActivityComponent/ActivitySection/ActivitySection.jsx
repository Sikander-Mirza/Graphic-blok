import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './ActivitySection.css';

const ActivitySection = () => {
  return (
    <>
      {/* New Collection Section */}
      <Row className="w-100 new-collection mb-5">
        <h2 className="text-center">New Collection</h2>
        <p className="text-center">
          Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text.
        </p>
        <Row className="w-75 mx-auto justify-content-between">
          {['Image 1', 'Image 2', 'Image 3'].map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="collection-card">
                <div className="image-placeholder"></div>
                <Card.Body className="text-center">
                  <Card.Title>{item}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>

      {/* Best Fashion Since 2014 Section */}
      <Row className="w-75 best-fashion align-items-center mx-auto">
        <Col md={6}>
          <div className="image-placeholder fashion-image"></div>
        </Col>
        <Col md={6}>
          <h2>Best Fashion Since 2014</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Row className="fashion-stats">
            <Col xs={4} className="text-center">
              <div className="stat-box">2014</div>
            </Col>
            <Col xs={4} className="text-center">
              <div className="stat-box">$900+</div>
            </Col>
            <Col xs={4} className="text-center">
              <div className="stat-box">3105+</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ActivitySection;
