import React, { useState } from "react";
import "./Events.css";

const eventDetails = {
  events: {
    CS_IT_MCA: [
      {
        name: "DEBUGGING",
        description:
          "The programming contest where participants are tasked with identifying and fixing errors (bugs) in a given piece of code within a limited timeframe.",
        image_url:
          "https://miro.medium.com/v2/resize:fit:1400/1*bGL-MBgZtfcLf2ZGox5tIw.jpeg",
        prize: "Prize Placeholder",
      },
      {
        name: "CODINGO",
        description:
          "The teams will be required to code a certain problem statement based on real life problems themed around sports programming.",
        image_url:
          "https://miro.medium.com/v2/resize:fit:1400/1*ruS15LazYIpD0VsJNZZ0pw.png",
        prize: "Prize Placeholder",
      },
      {
        name: "BERMUDA TRIANGLE",
        description:
          "A team event of 3 members where each member works on a different system and shifts positions to complete each other's code using comments.",
        image_url:
          "https://img.freepik.com/free-photo/bermuda-triangle-mystery-event_23-2151631174.jpg",
        prize: "Prize Placeholder",
      },
      {
        name: "HACKATHON",
        description:
          "A competitive event where participants develop innovative solutions or products within 24 to 72 hours.",
        image_url: "https://cdn-icons-png.flaticon.com/512/5044/5044840.png",
        prize: "Prize Placeholder",
      },
      {
        name: "WEBSITE DESIGN",
        description:
          "An event where participants design and create visually appealing and functional web pages or websites.",
        image_url:
          "https://cdni.iconscout.com/illustration/premium/thumb/web-development-illustration-download-in-svg-png-gif-file-formats--website-application-app-solution-software-pack-seo-illustrations-2918517.png?f=webp",
        prize: "Prize Placeholder",
      },
    ],
    Civil_Engineering: [
      {
        name: "INCLINO",
        description:
          "Design and test an inclined structure using ice-cream sticks with a minimum angle of 5 degrees and test its bearing strength with a 10kg weight.",
        image_url:
          "https://cdn0.iconfinder.com/data/icons/construction-38/100/Artboard_27-512.png",
        prize: "Prize Placeholder",
      },
      {
        name: "BRIDGE DESIGN",
        description:
          "An engineering contest where participants design and build a model or prototype of a bridge.",
        image_url:
          "https://img.freepik.com/premium-vector/bridge-innovation-crafting-unique-vector-logo-icon-bridges_579306-36830.jpg",
        prize: "Prize Placeholder",
      },
      {
        name: "STRUCTURE DESIGN",
        description:
          "Design and build models of buildings to meet the specified problem statement.",
        image_url:
          "https://cdni.iconscout.com/illustration/premium/thumb/structural-analysis-illustration-download-in-svg-png-gif-file-formats--analytics-logo-search-business-activities-pack-illustrations-6577934.png?f=webp",
        prize: "Prize Placeholder",
      },
      {
        name: "EGG DROP",
        description:
          "Design and build a contraption to protect a raw egg from breaking when dropped from a certain height.",
        image_url:
          "https://www.clipartmax.com/png/middle/158-1584388_egg-drop-clipart-egg-drop-clipart-png.png",
        prize: "Prize Placeholder",
      },
      {
        name: "TECH-O-DRAW",
        description:
          "Create technical drawings, diagrams, or schematics to represent engineering, architectural, or scientific concepts.",
        image_url:
          "https://cdni.iconscout.com/illustration/premium/thumb/technical-support-illustration-download-in-svg-png-gif-file-formats--call-logo-tech-customer-provide-pack-business-illustrations-2621574.png?f=webp",
        prize: "Prize Placeholder",
      },
    ],
    Electronics_Robotics: [
      {
        name: "MAZE SOLVER",
        description:
          "Create an autonomous robot that traverses a maze, learns from the path, and uses sorting to find the shortest path back.",
        image_url: "https://freesvg.org/img/simplemaze.png",
        prize: "Prize Placeholder",
      },
      {
        name: "ROBO SOCCER",
        description:
          "A robotics competition where teams control two robots to score goals in an arena.",
        image_url:
          "https://img.freepik.com/free-photo/robot-playing-soccer_1048-3586.jpg",
        prize: "Prize Placeholder",
      },
      {
        name: "I-BOT",
        description:
          "A competition where participants control robots remotely using a laptop camera feed.",
        image_url: "https://cdn-icons-png.flaticon.com/256/4233/4233830.png",
        prize: "Prize Placeholder",
      },
      {
        name: "HOVER MANIA",
        description:
          "Design and build a hovercraft or hover vehicle using air propulsion.",
        image_url:
          "https://thumbs.dreamstime.com/b/futuristic-urban-air-mobility-system-holographic-taxis-advanced-hover-technology-interactive-digital-traffic-controls-330944187.jpg",
        prize: "Prize Placeholder",
      },
      {
        name: "SPIDER BOT",
        description:
          "Design and build robotic spiders capable of performing specific tasks.",
        image_url:
          "https://cdn3d.iconscout.com/3d/premium/thumb/spiderbot-3d-icon-download-in-png-blend-fbx-gltf-file-formats--spider-robot-crawler-mechanical-robotics-pack-science-technology-icons-9172764.png?f=webp",
        prize: "Prize Placeholder",
      },
    ],
    Mechanical_Engineering: [
      {
        name: "HYDRAULIC CRANES",
        description:
          "Design and build a hydraulic crane capable of lifting and moving weights.",
        image_url: "https://cdn-icons-png.flaticon.com/256/10559/10559087.png",
        prize: "Prize Placeholder",
      },
      {
        name: "STEP AHEAD",
        description:
          "Use knowledge of mechanical laws to accomplish a task with the maximum number of steps.",
        image_url: "https://static.thenounproject.com/png/113180-200.png",
        prize: "Prize Placeholder",
      },
      {
        name: "BEAT THE TRACK",
        description:
          "Design a boat that uses aerodynamics and Archimedes’ principle of floating bodies to navigate a track.",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-X_ryFbZcQnRKI9YQ1RbUknRM2237Aqumow&s",
        prize: "Prize Placeholder",
      },
      {
        name: "MAD 4 CAD",
        description:
          "Test your design skills by creating realistic mechanical designs from blueprints.",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknfSA3MPT0_NAOfMSXQRKbQG5s_naCctYvw&s",
        prize: "Prize Placeholder",
      },
    ],
    Entrepreneurial: [
      {
        name: "IDEATHON",
        description:
          "A competition focused on generating and developing innovative ideas to solve specific problems or address challenges.",
        image_url:
          "https://media.licdn.com/dms/image/v2/D5612AQHD-P89GGeLaA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1726045694743?e=2147483647&v=beta&t=pGGG1ykqbvaBI5doLOdIYgOroHNyfDzqS2DPQVAr7x4",
        prize: "Prize Placeholder",
      },
      {
        name: "TECHNO-SCRIPT",
        description:
          "A competition where participants write and present technical content on technology-related topics.",
        image_url:
          "https://cdni.iconscout.com/illustration/premium/thumb/industry-visit-illustration-download-in-svg-png-gif-file-formats--industrial-site-trip-notes-collegy-pack-university-illustrations-4202868.png?f=webp",
        prize: "Prize Placeholder",
      },
    ],
    Fun_Events: [
      {
        name: "ESPORTS",
        description:
          "A competitive video game event where individuals or teams play games like League of Legends, Fortnite, Dota 2, etc.",
        image_url:
          "https://img.freepik.com/free-vector/character-playing-videogame_23-2148518505.jpg",
        prize: "Prize Placeholder",
      },
      {
        name: "MEME-O-THEME",
        description:
          "A competition where participants design memes based on a specific theme or topic.",
        image_url:
          "https://i.pinimg.com/736x/ab/ee/79/abee799d0e966083e4b50ab591edc4a7.jpg",
        prize: "Prize Placeholder",
      },
      {
        name: "FILMMAKING",
        description:
          "Create short films based on specific themes, genres, or challenges within a set timeframe.",
        image_url:
          "https://img.freepik.com/free-vector/film-device-design_24908-82222.jpg",
        prize: "Prize Placeholder",
      },
      {
        name: "UI/UX",
        description:
          "Design user interfaces and user experiences for digital products, such as websites and mobile apps.",
        image_url:
          "https://cdni.iconscout.com/illustration/premium/thumb/ui-designing-illustration-download-in-svg-png-gif-file-formats--ux-design-development-pack-illustrations-3518339.png?f=webp",
        prize: "Prize Placeholder",
      },
      {
        name: "TECH QUIZ",
        description:
          "A quiz competition testing knowledge on technology, science, and engineering.",
        image_url:
          "https://cdni.iconscout.com/illustration/premium/thumb/education-quiz-illustration-download-in-svg-png-gif-file-formats--q-and-a-frequently-asked-questions-exclamation-mark-interrogation-point-e-learning-vol2-pack-illustrations-3290981.png?f=webp",
        prize: "Prize Placeholder",
      },
    ],
  },
};

export const Events = () => {
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(eventDetails.events)[0]
  );

  return (
    <div className="events-container">
      <h1 className="main-title">Techfest Events</h1>
      <div className="category-tabs">
        {Object.keys(eventDetails.events).map((category) => (
          <button
            key={category}
            className={`category-tab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.replace(/_/g, " ")}
          </button>
        ))}
      </div>
      <div className="category-container">
        <h2>{activeCategory.replace(/_/g, " ")}</h2>
        <div className="event-cards">
          {eventDetails.events[activeCategory].map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image_url} alt={event.name} loading="lazy" />
              <div className="content">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p className="prize">
                  <strong>Prize:</strong> {event.prize}
                </p>
                <div className="button-container">
                  <button className="register-btn">Register</button>
                  <button className="details-btn">More Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
