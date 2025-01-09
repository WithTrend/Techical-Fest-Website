import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Home = () => {
  const particlesInit = async (main) => {
    // Initialize tsParticles
    await loadFull(main);
  };

  return (
    <div
      className="home-container"
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Particle Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true }, // Ensures particles stay within the div
          particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } },
            color: { value: ["#3498db", "#2ecc71", "#000000"] }, // Gradient-aligned colors
            shape: { type: "circle" },
            opacity: {
              value: 0.8,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
            },
            size: {
              value: 5,
              random: true,
              anim: { enable: true, speed: 2, size_min: 0.5, sync: false },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "grab" }, // Grab effect on hover
              onclick: { enable: true, mode: "push" }, // Push new particles on click
            },
            modes: {
              grab: { distance: 200, line_linked: { opacity: 0.5 } },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};
