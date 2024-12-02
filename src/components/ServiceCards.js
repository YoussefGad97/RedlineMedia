import React, { useState } from "react";
import "../styles/components/ServiceCards.scss";  // Make sure this path is correct
import ServiceCardImage from "../assets/images/landing1.jpg"; // Example image for all services

const ServiceCards = () => {
    const services = [
        { name: "Web Design", image: ServiceCardImage },
        { name: "SEO Optimization", image: ServiceCardImage },
        { name: "Social Media Management", image: ServiceCardImage },
        { name: "Branding", image: ServiceCardImage },
        { name: "App Development", image: ServiceCardImage },
        { name: "Digital Marketing", image: ServiceCardImage }
    ];

    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleFlip = (index) => {
        setFlippedIndex(index === flippedIndex ? null : index);
    };

    return (
        <div className="service-cards-container">
            {services.map((service, index) => (
                <div
                    className={`service-card ${flippedIndex === index ? "flipped" : ""}`}
                    key={index}
                    onClick={() => handleFlip(index)}
                >
                    <div className="card-inner">
                        
                        {/* Back (Form) */}
                        <div className="card-back">
                            <form>
                                <h4>Request More Information</h4>
                                <input type="text" placeholder="Your Name" required />
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
