import React from 'react';
import './Activity.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ActivitySection from '../../components/ActivityComponent/ActivitySection/ActivitySection';
import BestSeller from '../../components/ActivityComponent/BestSeller/BestSeller';
import ProductGrid from '../../components/ActivityComponent/ProductGrid/ProductGrid';
import CountdownComponent from '../../components/ActivityComponent/CountdownComponent/CountdownComponent';

const Activity = () => {
  return (
    <>
    <Container fluid className="activity-container d-flex align-items-center justify-content-center">
      <Row className="w-100 g-5 justify-content-between"> {/* g-5 adds a gap between columns */}
        <Col className="text-section">
          <h1 className="mb-4">Find The Best Fashion Style For You</h1>
          <p>
            Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy.
          </p>
          <Button variant="dark" className="mt-3">Shop Now</Button>
        </Col>
        <Col className="image-section">
          {/* Placeholder for the image */}
          <div className="image-placeholder"></div>
        </Col>
      </Row>
      
    </Container>
  <ActivitySection/>
  <BestSeller/>
  <ProductGrid/>
  <CountdownComponent/>
    </>
  );
};

export default Activity;
