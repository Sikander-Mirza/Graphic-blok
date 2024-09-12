import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import swal from 'sweetalert'; // Import SweetAlert
import './Contact.css';

const Contact = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://server-eta-puce.vercel.app/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        swal("Success!", "Your Email has been placed successfully!", "success");
      } else {
        alert(`Failed to send email: ${result.error}`);
        swal("An error occurred while sending the email", "error");

      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
      swal("An error occurred while sending the email", "error");

    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.3 },
    },
  };

  return (
    <div className="container py-5 mt-5" ref={ref}>
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4 text-black">Let's Discuss</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Work email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <select
                className="form-control"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="CopyWriting">CopyWriting</option>
                <option value="Web Designing">Web Designing</option>
                <option value="SEO">SEO</option>
                <option value="Shopify">Shopify</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Data Scraping">Data Scraping</option>
                <option value="Virtual Assistant">Virtual Assistant</option>
                <option value="UI/UX Designing">UI/UX Designing</option>
                <option value="Web Development">Web Development</option>

              </select>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Messages"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <motion.div className="equal-height-row" initial="hidden" animate={controls} variants={cardVariants}>
            <motion.div className="contact-card email-card" variants={cardVariants}>
              <h5>Email Us</h5>
              <p className='text-white'>graphicblok@gmail.com</p>
              <p className='text-white'>Call Us</p>
              <p className='text-white'>+92 327 2075510</p>
            </motion.div>
            <motion.div className="contact-card" variants={cardVariants}>
              <h5>US Office</h5>
              <p className='text-white'>90 Hartley Dr, Waterbury, CT 06705</p>
            </motion.div>
            <motion.div className="contact-card" variants={cardVariants}>
              <h5>PK Office</h5>
              <p className='text-white'>L.A.C #01, Mehmoodabad, Karachi (75460)</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
