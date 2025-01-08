import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="content-wrapper">
          <h1 className="hero-heading">Effulgence 2025</h1>
          <p className="hero-subheading">A Celebration of Innovation</p>
          <button className="cta-button">Join Us</button>
        </div>
      </div>

      {/* UFO Animation */}
      <div className="ufo-container">
        <div className="ufo">
          <div className="ufo-top"></div>
          <div className="ufo-body"></div>
        </div>
      </div>
    </div>
  );
};
