import React from 'react';
import '../css/Diet.css';

const Diet = () => {
    return (
        <div className="diet-container">
            <div className="content-section">
                <h2>Fruit Diet: Benefits, Risks, and More</h2>
                <p>
                    A fruit diet provides essential vitamins and fiber, but may lack 
                    sufficient protein for long-term health. Enjoy fruits as part of 
                    a balanced diet for optimal nutrition.
                </p>
                <p className="source">Images from Freepik</p>
                <a href="#" className="learn-more-btn">Learn More</a>
            </div>
            
            <div className="images-section">
                <div className="circles-container">
                    <div className="circle circle-red"></div>
                    <div className="circle circle-orange"></div>
                </div>
                <div className="image-group">
                    <div className="image-wrapper image-top">
                        <img src="./f2.jpg" alt="Fresh fruits" />
                    </div>
                    <div className="image-wrapper image-middle">
                        <img src="./f2.jpg" alt="Fruit assortment" />
                    </div>
                    <div className="image-wrapper image-bottom">
                        <img src="./f2.jpg" alt="Healthy fruits" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Diet;