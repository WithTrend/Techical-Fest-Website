import React, { useState } from "react";
import "./Speakers.css";

const speakers = [
  {
    id: 1,
    name: "John Doe",
    bio: "Expert in Web Development, creating beautiful and efficient web applications.",
    images: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/men/3.jpg",
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    bio: "A seasoned speaker on AI and Machine Learning, helping businesses adopt new technologies.",
    images: [
      "https://randomuser.me/api/portraits/women/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
      "https://randomuser.me/api/portraits/women/4.jpg",
    ],
  },
  {
    id: 3,
    name: "Alex Johnson",
    bio: "Cloud Solutions Architect, providing innovative solutions for scalable cloud infrastructure.",
    images: [
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
    ],
  },
  {
    id: 4,
    name: "Maria Garcia",
    bio: "UX/UI designer with a passion for creating intuitive and user-friendly interfaces.",
    images: [
      "https://randomuser.me/api/portraits/women/4.jpg",
      "https://randomuser.me/api/portraits/women/5.jpg",
      "https://randomuser.me/api/portraits/women/6.jpg",
    ],
  },
];

export const Speakers = () => {
  const [currentImage, setCurrentImage] = useState({});

  const handleImageChange = (id, direction) => {
    setCurrentImage((prev) => {
      const speaker = speakers.find((speaker) => speaker.id === id);
      const newIndex =
        direction === "next"
          ? (speaker.images.indexOf(prev[id]) + 1) % speaker.images.length
          : (speaker.images.indexOf(prev[id]) - 1 + speaker.images.length) %
            speaker.images.length;
      return { ...prev, [id]: speaker.images[newIndex] };
    });
  };

  return (
    <div className="speakers-container">
      <h2>Meet Our Speakers</h2>
      <div className="speakers-list">
        {speakers.map((speaker) => (
          <div className="speaker-card" key={speaker.id}>
            <div className="speaker-image-container">
              <img
                src={currentImage[speaker.id] || speaker.images[0]}
                alt={speaker.name}
                className="speaker-image"
              />
              <div className="image-slider-controls">
                <button
                  className="slider-btn prev"
                  onClick={() => handleImageChange(speaker.id, "prev")}
                >
                  &#10094;
                </button>
                <button
                  className="slider-btn next"
                  onClick={() => handleImageChange(speaker.id, "next")}
                >
                  &#10095;
                </button>
              </div>
            </div>
            <h3 className="speaker-name">{speaker.name}</h3>
            <p className="speaker-bio">{speaker.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
