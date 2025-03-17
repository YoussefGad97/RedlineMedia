import React, { useState } from "react";
import "../styles/components/Team.scss";
import Member1 from "../assets/images/JOE.png";
import Member2 from "../assets/images/AMR.jpeg";
import Member3 from "../assets/images/S7S.jpeg";
import Member4 from "../assets/images/Kholoud.jpeg";

const teamMembers = [
  {
    name: "Youssef Gad",
    position: "Web-Developer",
    image: Member1,
    whatsapp: "+201021020613",
    email: "mryoussefaymangad@gmail.com",
  },
  {
    name: "Amr Ezzat",
    position: "Graphic Designer",
    image: Member2,
    whatsapp: "+0987654321",
    email: "jane@example.com",
  },
  {
    name: "Mohammad Hussein",
    position: "Marketing Specialist",
    image: Member3,
    whatsapp: "+1122334455",
    email: "alice@example.com",
  },
  {
    name: "Kholud Khaled ",
    position: "Social Media Manager",
    image: Member4,
    whatsapp: "+5566778899",
    email: "bob@example.com",
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <p>
        Meet the talented individuals who make our projects a success. We are
        dedicated to delivering the best results for our clients.
      </p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="overlay">
              <p>{member.name}</p>
              <p>{member.position}</p>
              <p>WhatsApp: {member.whatsapp}</p>
              <p>Email: {member.email}</p>
            </div>
            <h2>{member.name}</h2>
            <p className="position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;