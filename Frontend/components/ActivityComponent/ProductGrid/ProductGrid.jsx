import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";



const ProductGrid = () => {
  return (
    <Container fluid>
      {/* Section 1: About Us */}
      <Row className="py-5 align-items-center">
        <Col md={6}>
          <div
            style={{
              width: "100%",
              height: "250px",
              backgroundColor: "#ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>Image Placeholder</p>
          </div>
        </Col>
        <Col md={6}>
          <h2>Немного истории о нас</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            auctor erat at turpis varius laoreet.
          </p>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </Col>
      </Row>

      {/* Section 2: How to Choose */}
      <Row className="text-center py-5 bg-light">
        <Col>
          <h3>Как выбрать услугу</h3>
        </Col>
      </Row>
      <Row className="text-center py-3">
        <Col xs={6} md={3}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#ddd",
              borderRadius: "50%",
              margin: "auto",
            }}
          >
            <p>Step 1</p>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#ddd",
              borderRadius: "50%",
              margin: "auto",
            }}
          >
            <p>Step 2</p>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#ddd",
              borderRadius: "50%",
              margin: "auto",
            }}
          >
            <p>Step 3</p>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#ddd",
              borderRadius: "50%",
              margin: "auto",
            }}
          >
            <p>Step 4</p>
          </div>
        </Col>
      </Row>

      {/* Section 3: Pricing */}
      <Row className="text-center py-5">
        <Col>
          <h3>Сколько это стоит</h3>
          <div
            style={{
              width: "100%",
              height: "150px",
              backgroundColor: "#eee",
              margin: "20px auto",
            }}
          >
            <p>Pricing Placeholder</p>
          </div>
        </Col>
      </Row>

      {/* Section 4: Testimonials */}
      <Row className="text-center py-5 bg-light">
        <Col>
          <h3>Что говорят наши клиенты</h3>
        </Col>
      </Row>
      <Row className="text-center py-3">
        <Col xs={12} md={4}>
          <div
            style={{
              width: "100%",
              height: "150px",
              backgroundColor: "#ccc",
            }}
          >
            <p>Testimonial 1</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div
            style={{
              width: "100%",
              height: "150px",
              backgroundColor: "#ccc",
            }}
          >
            <p>Testimonial 2</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div
            style={{
              width: "100%",
              height: "150px",
              backgroundColor: "#ccc",
            }}
          >
            <p>Testimonial 3</p>
          </div>
        </Col>
      </Row>

      {/* Section 5: Certifications */}
      <Row className="text-center py-5">
        <Col>
          <h3>Сертификаты качества</h3>
        </Col>
      </Row>
      <Row className="text-center py-3">
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <p>Certificate 1</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <p>Certificate 2</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <p>Certificate 3</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section 6: Footer Links */}
      <Row className="text-center py-5 bg-light">
        <Col xs={12} md={4}>
          <Button variant="outline-secondary">Статья 1</Button>
        </Col>
        <Col xs={12} md={4}>
          <Button variant="outline-secondary">Статья 2</Button>
        </Col>
        <Col xs={12} md={4}>
          <Button variant="outline-secondary">Статья 3</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductGrid;
