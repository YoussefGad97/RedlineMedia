import React from "react";
import { FaPaintBrush, FaCode, FaBullhorn, FaMobileAlt } from "react-icons/fa"; // You can use other icons if needed
import "../styles/components/Mission.scss"; // Ensure the path is correct

const Mission = () => {
  const missionStatement = [
    {
      icon: <FaCode />,
      title: "Web Development",
      mission:
        "We are committed to delivering state-of-the-art web development services that ensure your website is scalable, responsive, and user-friendly. Our team leverages cutting-edge technologies to help your business stand out online.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      mission:
        "Our goal is to help your brand visually communicate its identity. Through creative graphic design, we aim to craft stunning visuals that connect with your audience and elevate your brand’s presence.",
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing Strategy",
      mission:
        "Our mission is to craft powerful marketing strategies tailored to your unique goals. We combine digital expertise with traditional methods to create campaigns that resonate with your target audience and deliver measurable results.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Solutions",
      mission:
        "We aim to build intuitive, high-performance mobile applications that provide seamless user experiences across devices. Our mobile solutions are designed to drive engagement and grow your business in the mobile-first world.",
    },
  ];

  return (
    <section className="mission">
      <h2 className="section-title">Our Mission</h2>
      <div className="mission-container">
        {missionStatement.map((item, index) => (
          <div className="mission-item" key={index}>
            <div className="mission-icon">{item.icon}</div>
            <div className="mission-text">
              <h3>{item.title}</h3>
              <p>{item.mission}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
