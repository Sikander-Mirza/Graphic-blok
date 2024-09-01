import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Shop.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MenuCards from '../../components/Menucards/MenuCards';
import Letterhead from '../../components/letterHeads/LetterHead';
import Logohead from '../../components/logoHead/LogoHead';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";

const Shop = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when it comes into view
    threshold: 0.1, // Percentage of the component that needs to be visible to trigger
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <>
      <div className="container my-5" >
        {/* Header Section */}
        <div className="row d-flex align-items-center" ref={ref}>
          {/* Text Section */}
          <motion.div
            className="col-md-8 w-50"
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
          >
            <div className="mb-4" style={{marginTop:"6rem"}}>
              <span className="badge badge-pill badge-secondary">More Than Faster</span>
            </div>
            <h1 className="mb-4">Instant Food, for Instant Hunger</h1>
            <p className="mb-4">
              Retail food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="col-md-4"
            style={{ marginLeft: '5rem' }}
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
          >
            <img src="chef-image.png" alt="Chef" className="img-fluid" />
          </motion.div>
        </div>
      </div>
      <MenuCards/>
      <Letterhead/>
      <Logohead/>
      <Testimonials/>
      <FAQ/>


    </>
    
  );
};

export default Shop;
