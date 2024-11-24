import React from "react";
import "../styles/components/FeaturedServices.scss"; // SCSS for the section
import { FaPaintBrush, FaCode, FaBullhorn, FaMobileAlt } from "react-icons/fa"; // Example icons from FontAwesome

const FeaturedServices = () => {
  const services = [
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      description: "Creating visually stunning and engaging designs.",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Building responsive, dynamic, and modern websites.",
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing Strategy",
      description: "Effective strategies to amplify your brand's reach.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Social Media Management",
      description: "Driving engagement and building community online.",
    },
  ];

  return (
    <section className="featured-services">
      <h2 className="section-title">Our Expertise</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;
