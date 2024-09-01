import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logohead.css';  // Include the updated CSS file

const Logohead = () => {
    return (
        <div className="container mt-6">
            <h2 className="logohead-title mb-4">Make your customized design with Graphicblok</h2>
            <p className="logohead-description">Why should you use BrandCrowd to create your Letterhead?</p>
            <div className="row">
                <div className="col-md-6">
                    <ul className="logohead-list">
                        <li className="logohead-item mb-4">
                            <strong>✅ Unique Letterhead designs</strong>
                            <p className="logohead-text mb-0">Unlike other makers that use stock icons, our designs have all been handcrafted by a community of top designers. Get a stunning Letterhead - always!</p>
                        </li>
                        <li className="logohead-item mb-4">
                            <strong>✅ Free to use</strong>
                            <p className="logohead-text mb-0">BrandCrowd's Letterhead Maker is free to try. Browse thousands of different letterheads, and save as many as you like.</p>
                        </li>
                        <li className="logohead-item mb-4">
                            <strong>✅ It’s fast - create a Letterhead in 2 minutes</strong>
                            <p className="logohead-text mb-0">Pick a design you love and change the font, colors, and layout. In minutes you can make a Letterhead you will love.</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="logohead-image-wrapper">
                        <img src="your-image-url-here.png" alt="Letterhead examples" className="logohead-image img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logohead;
