import React from "react";
import "../styles/components/Team.scss";
import Member1 from "../assets/images/Amr.png"


const teamMembers = [
  {
    name: "John Doe",
    position: "Project Manager",
    image: Member1,
    whatsapp: "+1234567890",
    email: "john@example.com",
  },
  {
    name: "Jane Smith",
    position: "Developer",
    image: Member1,
    whatsapp: "+0987654321",
    email: "jane@example.com",
  },
  {
    name: "Alice Johnson",
    position: "Designer",
    image: Member1,
    whatsapp: "+1122334455",
    email: "alice@example.com",
  },
  {
    name: "Bob Brown",
    position: "Marketing Specialist",
    image: Member1,
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
