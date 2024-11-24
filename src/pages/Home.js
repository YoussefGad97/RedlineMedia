import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from Bootstrap
import "../styles/Home.scss"; // Ensure this points to the correct SCSS file
import image1 from "../assets/images/landing1.jpg";
import image2 from "../assets/images/landing2.jpg";
import image3 from "../assets/images/landing3.jpg";
import ImageWithText from "../components/ImageWithText"; // Adjust the path if necessary
import BackToTop from "../components/Back-To-Top";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detecting screen size for mobile responsiveness
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile(); // Check on load
    window.addEventListener("resize", checkIfMobile); // Check on resize
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Slides data
  const slides = [
    { image: image1, text: "Welcome to Crescendo" },
    { image: image2, text: "Your Creative Partner" },
    { image: image3, text: "Innovative Solutions" },
  ];

  return (
    <div className="home">
      <Carousel controls={isMobile} indicators={true} interval={5000} fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="slide-image"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh", // Adjust height based on your design
              }}
            ></div>
            <Carousel.Caption>
              <h1 className="bouncing-text">{slide.text}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <ImageWithText />

      <div>
        {/* Your page content */}
        <BackToTop />
      </div>
    </div>
  );
};

export default Home;
