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

  <ActivitySection/>
  <BestSeller/>
  // <ProductGrid/>
  // <CountdownComponent/>
    </>
  );
};

export default Activity;
