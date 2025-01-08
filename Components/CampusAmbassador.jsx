import React from "react";
import "./CampusAmbassador.css";

export const CampusAmbassador = () => {
  return (
    <div className="campus-container">
      <h1 className="campus-heading">Become a Campus Ambassador</h1>
      <p className="campus-description">
        Take the first step towards representing our brand on your campus! Help
        us spread the word and earn exciting rewards.
      </p>
      <div className="campus-info-card">
        <h2 className="campus-info-heading">Why Become a Campus Ambassador?</h2>
        <ul className="campus-info-list">
          <li>Gain leadership experience.</li>
          <li>Enhance your resume with real-world skills.</li>
          <li>Earn rewards and perks for your hard work.</li>
          <li>Be part of an exciting community.</li>
        </ul>
      </div>
      <button className="campus-apply-button">Apply for CA</button>
    </div>
  );
};
