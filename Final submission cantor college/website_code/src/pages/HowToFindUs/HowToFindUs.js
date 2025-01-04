import React from "react";
import './HowToFindUs.css';

const FindUs = () => {
  return (
    <div className="find-us-container">
      <h1>How to Find Us</h1>
      <p><strong>We are located at:</strong></p>
      <p>Cantor College</p>
      <p>Main Street</p>
      <p>Sheffield</p>
      <p>SC4 2BB</p>

      <p><strong>Please use the map below for location:</strong></p>
      
      <div className="map-image-container">
        <img 
          src="/images/872SHUSpaceCitymap.jpg"
          alt="Map Location"
          className="map-image"
        />
      </div>
    </div>
  );
};

export default FindUs;
