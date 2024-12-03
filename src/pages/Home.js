import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Home.scss";
import image1 from "../assets/images/landing1.jpg";
import image2 from "../assets/images/slide2.jpg";
import image3 from "../assets/images/slide3.jpg";
import ImageWithText from "../components/ImageWithText";
import BackToTop from "../components/BackToTop";
import FeaturedServices from "../components/FeaturedServices";
import Testimonials from "../components/Testimonials";
import ImageTextBlock from "../components/ImageTextBlock";
import CallToActionBanner from "../components/CallToActionBanner";
import Footer from "../components/Footer";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef([]);

  // Screen size detection for mobile responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for fade-in effects
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger fade-in when 10% is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const slides = [
    { image: image1, text: "Welcome to Redline Media" },
    { image: image2, text: "Your Creative Partner" },
    { image: image3, text: "Innovative Solutions" },
  ];

  return (
    <div className="home">
      {/* Carousel Section */}
      <Carousel controls={isMobile} indicators interval={5000} fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="slide-image"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            ></div>
            <Carousel.Caption>
              <h1 className="bouncing-text">{slide.text}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Sections */}
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className="fade-in-section"
      >
        <ImageWithText />
      </div>

      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className="fade-in-section"
      >
        <ImageTextBlock />
      </div>

      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className="fade-in-section"
      >
        <FeaturedServices />
      </div>

      <div
        ref={(el) => (sectionRefs.current[3] = el)}
        className="fade-in-section"
      >
        <Testimonials />
      </div>

      <div
        ref={(el) => (sectionRefs.current[4] = el)}
        className="fade-in-section"
      >
        <CallToActionBanner />
      </div>

      <div
        ref={(el) => (sectionRefs.current[5] = el)}
        className="fade-in-section"
      >
        <Footer />
      </div>

    </div>
  );
};

export default Home;
