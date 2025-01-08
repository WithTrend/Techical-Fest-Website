import React from "react";
import "./Contact.css"; // Importing the CSS file for styling

const members = [
  {
    name: "Nitin",
    role: "Developer",
    email: "nitin@example.com",
    phone: "123-456-7890",
  },
  {
    name: "Naitik",
    role: "Designer",
    email: "naitik@example.com",
    phone: "123-456-7891",
  },
  {
    name: "Jhalak",
    role: "Product Manager",
    email: "jhalak@example.com",
    phone: "123-456-7892",
  },
  {
    name: "Amresh Rai",
    role: "Content Creator",
    email: "amresh@example.com",
    phone: "123-456-7893",
  },
  {
    name: "Vandita",
    role: "Marketing",
    email: "vandita@example.com",
    phone: "123-456-7894",
  },
  { name: "Raj", role: "CEO", email: "raj@example.com", phone: "123-456-7895" },
];

export const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Our Team</h2>
      <div className="team-members">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="card-content">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p>
                <strong>Email:</strong> {member.email}
              </p>
              <p>
                <strong>Phone:</strong> {member.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
