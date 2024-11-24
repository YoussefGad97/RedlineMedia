import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from Bootstrap
import "../styles/Home.scss"; // Ensure this points to the correct SCSS file
import image1 from "../assets/images/landing1.jpg";
import image2 from "../assets/images/landing2.jpg";
import image3 from "../assets/images/landing3.jpg";
import ImageWithText from "../components/ImageWithText"; // Adjust the path if necessary
import BackToTop from "../components/Back-To-Top"; // Ensure the file path is correct
import FeaturedServices from "../components/FeaturedServices";
import Testimonials from "../components/Testimonials"; // Import the new Testimonials section

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [fadeInElements, setFadeInElements] = useState([]);

  const sectionRefs = useRef([]);

  // Detecting screen size for mobile responsiveness
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile(); // Check on initial load
    window.addEventListener("resize", checkIfMobile); // Update on window resize
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Intersection Observer to trigger fade-in animation
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFadeInElements((prev) => [...prev, entry.target]);
          observer.unobserve(entry.target); // Stop observing after it enters the viewport
        }
      });
    }, options);

    // Observe each section
    sectionRefs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  // Carousel slides data
  const slides = [
    { image: image1, text: "Welcome to Crescendo" },
    { image: image2, text: "Your Creative Partner" },
    { image: image3, text: "Innovative Solutions" },
  ];

  return (
    <div className="home">
      {/* Bootstrap Carousel */}
      <Carousel controls={isMobile} indicators={true} interval={5000} fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {/* Slide background image */}
            <div
              className="slide-image"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh", // Full viewport height
              }}
            ></div>
            {/* Slide caption */}
            <Carousel.Caption>
              <h1 className="bouncing-text">{slide.text}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Image with Text Section */}
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`fade-in-section ${
          fadeInElements.includes(sectionRefs.current[0]) ? "fade-in" : ""
        }`}
      >
        <ImageWithText />
      </div>

      {/* Featured Services Section */}
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`fade-in-section ${
          fadeInElements.includes(sectionRefs.current[1]) ? "fade-in" : ""
        }`}
      >
        <FeaturedServices />
      </div>

      {/* Testimonials Section */}
      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`fade-in-section ${
          fadeInElements.includes(sectionRefs.current[2]) ? "fade-in" : ""
        }`}
      >
        <Testimonials />
      </div>

      {/* Back to Top button */}
      <BackToTop />
    </div>
  );
};

export default Home;
