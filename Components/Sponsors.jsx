import React, { useState } from "react";
import "./Sponsors.css";

export const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "Sponsor A",
      logo: "https://www.ecommerce-nation.com/wp-content/uploads/2019/02/razorpay.webp",
    },
    {
      id: 2,
      name: "Sponsor B",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDa60Z2JqkL4ilCNUkuV_yIYemOJN8TcVgg&s",
    },
    {
      id: 3,
      name: "Sponsor C",
      logo: "https://www.91-cdn.com/hub/wp-content/uploads/2023/09/SBI-Minimum-Balance.png?tr=w-781",
    },
    {
      id: 4,
      name: "Sponsor D",
      logo: "https://assets.leetcode.com/static_assets/public/images/LeetCode_Sharing.png",
    },
    {
      id: 5,
      name: "Sponsor E",
      logo: "https://miro.medium.com/v2/resize:fit:799/0*ilw552fVUGbwIzbE.jpg",
    },
    {
      id: 6,
      name: "Sponsor F",
      logo: "https://braincompany.fr/wp-content/uploads/2020/05/LOGO-F-Police-changed-Noir-1.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === sponsors.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sponsors.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">Our Proud Sponsors</h2>
      <div className="carousel-container">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="carousel-item">
              <div className="sponsor-card">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-logo"
                />
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>
          &#8592;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#8594;
        </button>
        <div className="pagination">
          {sponsors.map((_, index) => (
            <span
              key={index}
              className={`pagination-dot ${
                index === currentSlide ? "active-dot" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
