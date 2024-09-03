import React from 'react';
import Slider from 'react-slick';
import './LogoSlider.css'; // Custom styles

// Importing client images
import client1 from "../../src/assets/Clients-01.png";
import client2 from "../../src/assets/Clients-02.png";
import client3 from "../../src/assets/Clients-03.png";
import client4 from "../../src/assets/Clients-04.png";
import client5 from "../../src/assets/Clients-05.png";
import client6 from "../../src/assets/Clients-06.png";
import client7 from "../../src/assets/Clients-07.png";
import client8 from "../../src/assets/Clients-08.png";
import client9 from "../../src/assets/Clients-09.png";
import client10 from "../../src/assets/Clients-10.png";
import client11 from "../../src/assets/Clients-11.png";
import client12 from "../../src/assets/Clients-12.png";
import client13 from "../../src/assets/Clients-13.png";
import client14 from "../../src/assets/Clients-14.png";
import client15 from "../../src/assets/Clients-15.png";
import client16 from "../../src/assets/Clients-16.png";
import client17 from "../../src/assets/Clients-17.png";
import client18 from "../../src/assets/Clients-18.png";

const LogoSlider = () => {
    // First set of logos using imported images
    const logos1 = [
        client1, client2, client3, client4, client5, client6, client7, client8, client9
    ];

    // Second set of logos using imported images
    const logos2 = [
        client10, client11, client12, client13, client14, client15, client16, client17, client18
    ];

    // Settings for the first slider (moving to the right)
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 5000, // Increase speed for a slower effect
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // No delay between slides
        cssEase: 'linear', // Smooth, continuous scroll
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

    // Settings for the second slider (moving to the left)
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 5000, // Increase speed for a slower effect
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // No delay between slides
        cssEase: 'linear', // Smooth, continuous scroll
        rtl: true, // This option makes the slider move to the left
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
        <div className="container mt-5">
            {/* First Logo Slider (Right Moving) */}
            <h2 className="text-center">Our Customers - Set 1</h2>
            <Slider {...settings1}>
                {logos1.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo} alt={`Logo ${index + 1}`} className="img-fluid" />
                    </div>
                ))}
            </Slider>

            {/* Second Logo Slider (Left Moving) */}
            <h2 className="text-center mt-5">Our Customers - Set 2</h2>
            <Slider {...settings2}>
                {logos2.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo} alt={`Logo ${index + 10}`} className="img-fluid" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LogoSlider;
