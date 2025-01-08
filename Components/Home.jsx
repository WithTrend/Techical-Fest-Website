import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Home = () => {
  const particlesInit = async (main) => {
    // Initialize tsParticles
    await loadFull(main);
  };

  return (
    <div className="home-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "linear-gradient(135deg, #3498db, #2ecc71)", // Matches header and footer gradient
          },
          particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: ["#3498db", "#2ecc71", "#ffffff"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.7,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 4,
              random: true,
              anim: { enable: true, speed: 3, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#3a5d8a",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble", // Creates a bubble effect
              },
              onclick: {
                enable: true,
                mode: "repulse", // Repulses particles on click
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                size: 8,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};
