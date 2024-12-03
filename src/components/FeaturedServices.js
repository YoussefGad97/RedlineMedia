import React from "react";
import "../styles/components/FeaturedServices.scss"; // SCSS for the section
import { FaRocket, FaLaptopCode, FaPaintBrush } from "react-icons/fa"; // Import icons
import Landing1 from "../assets/images/landing1.jpg";
import Landing2 from "../assets/images/landing2.jpg";
import Landing3 from "../assets/images/landing3.jpg";

const FeaturedServices = () => {
  const services = [
    {
      image: Landing1,
      icon: <FaRocket />,
      title: "Creative Brilliance",
      description:
        "Innovative ideas with strategic execution to create campaigns that captivate and deliver results.",
    },
    {
      image: Landing2,
      icon: <FaLaptopCode />,
      title: "Web Development Excellence",
      description:
        "Custom websites with cutting-edge technologies that offer great user experiences.",
    },
    {
      image: Landing3,
      icon: <FaPaintBrush />,
      title: "Design That Inspires",
      description:
        "Visually stunning graphics that capture the essence of your brand and leave a lasting impression.",
    },
  ];

  return (
    <section className="featured-services">
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="image"></div> {/* Dark overlay */}
            <div className="content">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;
