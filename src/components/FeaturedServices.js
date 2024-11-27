import React from "react";
import "../styles/components/FeaturedServices.scss"; // SCSS for the section
import Landing1 from "../assets/images/landing1.jpg"
import Landing2 from "../assets/images/landing2.jpg"
import Landing3 from "../assets/images/landing3.jpg"





const FeaturedServices = () => {
  const services = [
    {
      image: Landing1, // Path to your image
      title: "Creative Brilliance, Engineered for Impact",
      description:
        "At Redline Media, we believe that creativity is the cornerstone of exceptional marketing. Our team of skilled professionals specializes in blending innovative ideas with strategic execution to create campaigns that captivate audiences and drive measurable results. From cutting-edge graphic design to compelling motion graphics, we ensure your brand leaves a lasting impression.",
    },
    {
      image: Landing2, // Path to your image
      title: "Your Success, Our Priority",
      description:
        "Our mission is to help your business thrive in a competitive landscape. With expertise in web development, social media management, and lead generation, Redline Media crafts customized solutions designed to grow your audience, amplify your message, and convert opportunities into results. Partner with us to transform challenges into success stories.",
    },
    {
      image: Landing3, // Path to your image
      title: "Precision in Every Pixel",
      description:
        "At Redline Media, attention to detail defines everything we do. Whether it's ensuring flawless software testing or designing visually stunning websites, we focus on delivering perfection. Our commitment to quality and precision guarantees that every project reflects your brand's values and resonates with your audience.",
    },
  ];

  return (
    <section className="featured-services">
      <h2 className="section-title">Our Vision</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className={`service-card ${index % 2 === 0 ? "odd" : "even"}`}
            key={index}
          >
            <div className="image">
              <img src={service.image} alt={service.title} />
            </div>
            <div>
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
