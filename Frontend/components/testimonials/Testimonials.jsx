import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className="testimonial-container mt-5">
            <h2 className="text-center">Testimonials</h2>
            <hr className="mx-auto mb-4" style={{ width: '50px', border: '2px solid red' }} />
            <Carousel indicators={false}>
                <Carousel.Item>
                    <div className="text-center">
                        <p>
                            Kevin is a very professional individual who cares about his customers.
                            Also making sure the customer understand what is going on with the project.
                            In my case I am very busy so it's important that I don't have to constantly
                            follow up. 
                        </p>
                        <h5 className="font-weight-bold">Ira Craig (Urban)</h5>
                        <p>Song Writer & Producer</p>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="text-center">
                        <p>
                            I had an amazing experience working with Kevin. His attention to detail
                            and dedication to customer satisfaction are unmatched. I would definitely
                            recommend his services to anyone looking for top-notch results.
                        </p>
                        <h5 className="font-weight-bold">Jane Doe</h5>
                        <p>Creative Director</p>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="text-center">
                        <p>
                            Working with Kevin was a breeze. He made sure to keep me updated every
                            step of the way, which really put my mind at ease. The final product
                            exceeded my expectations!
                        </p>
                        <h5 className="font-weight-bold">John Smith</h5>
                        <p>Entrepreneur</p>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="text-center">
                        <p>
                            I highly recommend Kevin and his team. They are not only professional but
                            also incredibly supportive. I’m very satisfied with the outcome of my project.
                        </p>
                        <h5 className="font-weight-bold">Emily Johnson</h5>
                        <p>Business Owner</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonials;
