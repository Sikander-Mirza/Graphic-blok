import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Testimonials from "../../components/testimonials/Testimonials";
import FAQ from "../../components/faqs/FAQ";
import "./GraphicsDesign.css";
import Slider from 'react-slick';

const GraphicsDesign = () => {
  const [description, setDescription] = useState(''); // State to hold the description input

  // Function to open WhatsApp with a dynamic message
  const handleWhatsAppClick = (title = "") => {
    const phoneNumber = "+923272075510"; // Replace with your phone number
    let message;

    // If title is passed, use the title for the blog section message
    if (title) {
      message = `Hello, I'm interested in your ${title} services. Could you provide more information?`;
    } else {
      message = `Hello, I'm interested in design services. Here is my design description: ${description}. Can you assist me further?`;
    }

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const blogSections = [
    {
      title: "Brand Identity Creation",
      content: "From logos to brand guidelines, we craft a cohesive identity that tells your brand’s story. Whether you're starting fresh or refining an existing identity, we ensure your brand communicates effectively with your audience.",
      buttonText: "Find a Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1732984961/WhatsApp_Image_2024-11-30_at_11.50.00_c8bec996_fn7n8t.jpg",
      reverse: false,
    },
    {
      title: "Marketing Collateral Design",
      content: "Flyers, brochures, business cards, and banners that capture attention and convey your message. Let’s help you create eye-catching materials to promote your brand and connect with your audience.",
      buttonText: "Create My Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1732986280/WhatsApp_Image_2024-11-30_at_11.49.59_9d9b8478_gn8gap.jpg",
      reverse: true,
    },
    {
      title: "Custom Illustrations & Infographics",
      content: "Visuals that creatively explain ideas and drive engagement. Our custom illustrations and infographics are designed to capture attention, explain complex concepts, and make a memorable impact.",
      buttonText: "Browse Website Designs",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1732986383/WhatsApp_Image_2024-11-30_at_11.49.59_5984d606_pu7sgd.jpg",
      reverse: false,
    },
    {
      title: "Packaging & Merchandise Design",
      content: "Designs that not only represent your brand but also promote your products. From product packaging to merchandise, we help you create designs that stand out on shelves and make a statement.",
      buttonText: "Find Your Website",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1732986337/WhatsApp_Image_2024-11-30_at_11.49.59_26dba88f_fg1evs.jpg",
      reverse: true,
    },
    {
      title: "Build the ideal website",
      content: "Creating engaging, visually appealing social media content that resonates with your audience. From posts and stories to campaigns, we help you build a social media presence that drives engagement and supports your brand’s growth.",
      buttonText: "Start Building",
      image: "https://res.cloudinary.com/dwul2hfvj/image/upload/v1732986434/WhatsApp_Image_2024-11-30_at_11.50.00_f424f15a_jcqljh.jpg",
      reverse: false,
    },
  ];

  const controls = useAnimation();
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [blogRef, blogInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [designsRef, designsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Trigger animation when section comes into view
  if (sectionInView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }
  if (blogInView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }
  if (designsInView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      {/* Parent Container */}
      <motion.div
        className="container-fluid bg-dark text-white py-5"
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <div className="container">
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Side - Text Content */}
            <div className="col-md-6 text-start px-5" style={{ marginTop: "6rem", height: "22rem" }}>
              <h1 className="mb-3 mt-5">Graphics Designing</h1>
              <p className="mb-4 text-white">
              At Graphicblok, we turn creative ideas into visually stunning designs that connect with your target audience. Whether you need a complete brand identity overhaul or a single impactful design, our team of skilled designers ensures that your brand stands out in the competitive marketplace. We bring your vision to life with unique, customized designs that help you achieve your business goals.              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Describe your design now"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} // Capture input
                />
                <button className="btn btn-danger" onClick={() => handleWhatsAppClick()}>
                  Share With Us
                </button>
              </div>
            </div>

            {/* Right Side - Single Image */}
            <div className="col-md-6 text-center">
              <img
                src="https://res.cloudinary.com/dwul2hfvj/image/upload/v1732986512/WhatsApp_Image_2024-11-30_at_11.53.04_6eecd743_ys5gde.jpg"
                alt="Design Preview"
                className="img-fluid"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container text-center py-5">
        {/* Title */}
        <h3 className="mb-4">Make a design ...</h3>
        <p className='text-center mt-5'>1.	Describe Your Design: Share your design concept or idea with us.</p>
        <p className='text-center mt-5'>2.	Our Experts Work Their Magic: Our designers will collaborate with you to refine the vision and create a tailored design solution.</p>
        <p className='text-center mt-5'>3.	Final Product Delivery: Receive your professionally crafted designs ready to elevate your brand’s presence.</p>

        {/* Carousel */}
        <h2 className="text-center">Make Your Design a Reality...</h2>
        <p className='text-center mt-5'>At Graphicblok, we specialize in crafting visually compelling designs that elevate your brand. From logos and marketing materials to complete brand overhauls, we bring your ideas to life with creativity and precision. But we don’t stop at design – we offer seamless web design solutions to ensure your brand makes a lasting impression online. Whether you’re building a new website or revamping an existing one, we help you create a stunning online presence that gets you noticed.</p>
      </div>

      <motion.section
        className="blog-section py-5"
        ref={blogRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: blogInView ? 1 : 0, y: blogInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
Ready to Get Started?          </motion.h2>

          {/* Mapping through blogSections array */}
          {blogSections.map((section, index) => (
  <motion.div
    className={`row align-items-center mb-5 ${section.reverse ? "flex-md-row-reverse" : ""}`}
    key={index}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: blogInView ? 1 : 0, y: blogInView ? 0 : 50 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className="col-md-6">
      <h4>{section.title}</h4>
      <p>{section.content}</p>
      <button
        className="btn btn-danger"
        onClick={() => handleWhatsAppClick(section.title)}
      >
        {section.buttonText}
      </button>
    </div>
    <div className="col-md-6">
      <img
        src={section.image}
        alt={section.title}
        className="img-fluid rounded"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300";
        }}
      />
    </div>
  </motion.div>
))}
        </div>
      </motion.section>
      <Testimonials />
      <FAQ />
    </>
  );
};

export default GraphicsDesign;
