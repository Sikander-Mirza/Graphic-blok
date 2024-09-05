import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonials.css';

const testimonials = [
    {
        text: "Sher's Picnic Rovers Graphicblok did an outstanding job with the branding for Sher's Picnic Rovers. Their creativity and attention to detail brought our vision to life, perfectly capturing our brand's essence. The process was smooth, with excellent communication and timely revisions. Our new brand identity is vibrant and memorable, thanks to their expertise. Highly recommend Graphicblok for any branding needs!",
        author: "Victoria",
        title: "Highly Recommended!"
    },
    {
        text: "I recently used Graphicblok's services and I must say, I'm thoroughly impressed.❤️👍👌",
        author: "Sunaina Shahbaz",
        title: ""
    },
    {
        text: "I had an outstanding experience working with Graphicblok. Their expertise and dedication to the project were truly impressive. Highly recommended.",
        author: "Sikander Mirza",
        title: ""
    },
    {
        text: "I had an outstanding experience working with Graphicblok. Their expertise and dedication to the project were truly impressive. They consistently delivered high-quality work on time and communicated effectively throughout the process. I appreciate their attention to detail and proactive approach to problem-solving.",
        author: "Izma Khalid",
        title: ""
    },
    {
        text: "Graphicblok has done an outstanding job with their designs, exceptional creativity and attention to detail. Their work truly impresses and sets a high standard for graphic design services. Highly appreciated! 🌟🎨",
        author: "Joshua Ashir",
        title: ""
    },
    {
        text: "Graphicblok has truly elevated my design game. It has become an indispensable tool in my creative toolkit, enabling me to create professional-grade visuals that impress clients and colleagues alike.",
        author: "Imran Khawaja",
        title: ""
    },
    {
        text: "It was too good experience with that company he made branding for me and it was amazing in future I am going to give all my project to him. Thanks",
        author: "Kinza Khalid",
        title: ""
    },
    {
        text: "Highly recommend helped me craft a standout resume with ease. It looks professional and highlights my skills perfectly. Very cooperative and professional attitude. Keep it up 👍",
        author: "Shahzain Imran",
        title: ""
    },
    {
        text: "I recently enlisted Graphicblok for their Shopify store creation services,Thank you for your exceptional work!",
        author: "Absar Ahmed",
        title: ""
    },
    {
        text: "My journey with Graphicblok was wonderful. I created a logo for my e-commerce business, and it was a very good experience. I would highly recommend them if you want any kind of graphic services. Graphicblok is the best choice.",
        author: "Sunaina Shahbaz",
        title: ""
    }
];

const Testimonials = () => {
    return (
        <div className="testimonial-container" style={{marginTop:"6rem"}}>
            <h2 className="text-center">Testimonials</h2>
            <hr className="mx-auto mb-4" style={{ width: '50px', border: '2px solid red' }} />
            <Carousel indicators={false}>
                {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                        <div className="text-center">
                            <p>{testimonial.text}</p>
                            <h5 className="font-weight-bold">{testimonial.author}</h5>
                            <p>{testimonial.title}</p>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Testimonials;
