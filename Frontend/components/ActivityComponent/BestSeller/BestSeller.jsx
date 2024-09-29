import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './BestSeller.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const BestSeller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const products = [
    { id: 1, name: 'Product 1', price: '$40', image: 'placeholder' },
    { id: 2, name: 'Product 2', price: '$45', image: 'placeholder' },
    { id: 3, name: 'Product 3', price: '$50', image: 'placeholder' },
    { id: 4, name: 'Product 4', price: '$60', image: 'placeholder' }
  ];

  return (
    <Container fluid className="best-seller-container">
      <Row className="justify-content-between mb-4">
        <Col md={4} className="best-seller-text">
          <h2>Best Seller Product</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Button variant="outline-dark">See More</Button>
        </Col>
        <Col md={8} className="best-seller-slider">
          <Slider {...settings}>
            {products.map((product) => (
              <Card key={product.id} className="product-card">
                <div className="image-placeholder"></div>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <div className="stars">
                    <span>★★★★★</span>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default BestSeller;
