import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuCards.css';
import PhoneNumberModal from './PhoneNumberModel'; // Import the modal component
import char from "../../src/assets/image.jpg";
import axios from 'axios';
import swal from 'sweetalert'; // Import SweetAlert

// Define animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MenuCards = () => {
  const controls = useAnimation();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const sectionTop = document.getElementById('menu-section').offsetTop;

    if (scrollPosition > sectionTop) {
      controls.start('visible');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const menuItems = [
    { name: "Green Sausages", price: "$250", rating: 4.5, image: char },
    { name: "Buzz Burgers", price: "$250", rating: 4.7, image: char },
    { name: "Popporoni Pizza", price: "$250", rating: 4.6, image: char },
    { name: "Green Salad", price: "$250", rating: 4.8, image: char },
    { name: "Smokin' Burger", price: "$250", rating: 4.9, image: char },
    { name: "American Burger", price: "$250", rating: 4.7, image: char },
  ];

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleSend = async (phoneNumber) => {
    const message = `You have selected ${selectedItem.name}. Price: ${selectedItem.price}, Rating: ${selectedItem.rating} stars.`;
    try {
      await axios.post('http://localhost:8080/api/send-message', {
        phoneNumber,
        message,
      });
      console.log('Message sent successfully');
      
      // Show a success message using SweetAlert
      swal("Success!", "Your order has been placed successfully!", "success");
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      
      // Show an error message using SweetAlert
      swal("Error!", "There was an error placing your order. Please try again.", "error");
    }
    setShowModal(false);
  };

  return (
    <div id="menu-section" className="container ">
      <h2 className="text-center mb-4">Special Menu For You</h2>

      <div className="row">
        {menuItems.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <motion.div
              className="card menu-card h-100"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
            >
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body text-left d-flex">
                <div className='col text-left'>
                  <h5 className="card-title">{item.name}</h5>
                  <div className="rating mb-3">
                    <span className="text-warning">★</span>
                    <span className="text-warning">★</span>
                    <span className="text-warning">★</span>
                    <span className="text-warning">★</span>
                    <span className="text-warning">{item.rating >= 4.5 ? '★' : '☆'}</span>
                  </div>
                  <p className="card-text price">{item.price}</p>
                </div>
                <button className="btn btn-custom" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Render the modal */}
      {selectedItem && (
        <PhoneNumberModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          handleSend={handleSend}
        />
      )}
    </div>
  );
}

export default MenuCards;
