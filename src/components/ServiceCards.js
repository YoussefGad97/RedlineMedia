import React, { useState, useEffect, useRef } from "react";
import "../styles/components/ServiceCards.scss"; // Make sure this path is correct
import ServiceCardImage from "../assets/images/landing1.jpg"; // Example image for all services
import SocailMediaImage from "../assets/images/SocialMedia.jpg";
import SEOImage from "../assets/images/SEO.jpg";
import WebImage from "../assets/images/Web.jpg";
import BrandingImage from "../assets/images/Branding.jpg";
import MotionClip from "../assets/images/Motion.jpg";



const ServiceCards = () => {
  const services = [
    { name: "Web Design", image: WebImage },
    { name: "SEO Optimization", image: SEOImage },
    { name: "Social Media Management", image: SocailMediaImage },
    { name: "Branding", image: BrandingImage },
    { name: "Motion Graphics", image: MotionClip },
    { name: "Digital Marketing", image: ServiceCardImage },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);
  const containerRef = useRef(null);

  // Handle click outside to flip the card back
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setFlippedIndex(null); // Flip all cards back to the front
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="service-cards-container" ref={containerRef}>
      {services.map((service, index) => (
        <div
          className={`service-card ${flippedIndex === index ? "flipped" : ""}`}
          key={index}
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from bubbling up to container
            handleFlip(index);
          }}
        >
          <div className="card-inner">
            {/* Back (Form) */}
            <div className="card-back">
              <form>
                <h4>Request More Information</h4>
                <input type="text" placeholder="Your Name" required />
                <input type="text" placeholder="Your Number" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>

            {/* Front (Image) */}
            <div className="card-front">
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
