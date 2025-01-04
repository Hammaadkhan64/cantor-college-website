import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">

      <div className="logo-container">
        <img src="/images/logo.png" alt="Cantor College Logo" className="logo" />
      </div>

      <div className="welcome-section">
        <h1>Welcome to Cantor College</h1>
      </div>

      <div className="image-section">
        <img src="/images/IMG_1005.jpeg" alt="View of Cantor College campus" className="campus-image" />
      </div>

      <div className="why-choose-us">
        <h2>Why choose us?</h2>
        <p>We are an award-winning college.</p>
      </div>
    </div>
  );
};

export default Home;