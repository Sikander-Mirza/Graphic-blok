import React from 'react';
import Slider from 'react-slick';
import './LogoSlider.css'; // Custom styles

const LogoSlider = () => {
    // First set of logos
    const logos1 = [
        'https://via.placeholder.com/150x100?text=Logo+1',
        'https://via.placeholder.com/150x100?text=Logo+2',
        'https://via.placeholder.com/150x100?text=Logo+3',
        'https://via.placeholder.com/150x100?text=Logo+4',
        'https://via.placeholder.com/150x100?text=Logo+5',
        'https://via.placeholder.com/150x100?text=Logo+6',
        'https://via.placeholder.com/150x100?text=Logo+7',
        'https://via.placeholder.com/150x100?text=Logo+8',
    ];

    // Second set of logos
    const logos2 = [
        'https://via.placeholder.com/150x100?text=Logo+A',
        'https://via.placeholder.com/150x100?text=Logo+B',
        'https://via.placeholder.com/150x100?text=Logo+C',
        'https://via.placeholder.com/150x100?text=Logo+D',
        'https://via.placeholder.com/150x100?text=Logo+E',
        'https://via.placeholder.com/150x100?text=Logo+F',
        'https://via.placeholder.com/150x100?text=Logo+G',
        'https://via.placeholder.com/150x100?text=Logo+H',
    ];

    // Settings for the first slider (moving to the right)
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

    // Settings for the second slider (moving to the left)
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
                        <img src={logo} alt={`Logo ${index}`} className="img-fluid" />
                    </div>
                ))}
            </Slider>

            {/* Second Logo Slider (Left Moving) */}
            <h2 className="text-center mt-5">Our Customers - Set 2</h2>
            <Slider {...settings2}>
                {logos2.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo} alt={`Logo ${index}`} className="img-fluid" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LogoSlider;
