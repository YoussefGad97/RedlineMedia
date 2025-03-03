import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Home.scss";
import image1 from "../assets/images/landing1.jpg";
import image2 from "../assets/images/slide2.jpg";
import image3 from "../assets/images/slide3.jpg";
import ImageWithText from "../components/ImageWithText";
import FeaturedServices from "../components/FeaturedServices";
import Testimonials from "../components/Testimonials";
import CallToActionBanner from "../components/CallToActionBanner";
import Footer from "../components/Footer";  
import ProjectGallery from "../components/ProjectGallery";
import BackToTop from "../components/BackToTop";
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  const slides = [
    { image: image1, text: "Welcome to Redline Media" },
    { image: image2, text: "Your Creative Partner" },
    { image: image3, text: "Innovative Solutions" },
  ];

  return (
    <div className="home">
      <Carousel controls={isMobile} indicators interval={5000} fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="slide-image"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <Carousel.Caption>
                <h1 className="bouncing-text">{slide.text}</h1>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="sections-container">
        <div className="section">
          <ImageWithText />
        </div>

        <div className="section">
          <WhyChooseUs />
        </div>

      

        <div className="section">
          <ProjectGallery />
        </div>

        <div className="section">
          <Testimonials />
        </div>

        <div className="section">
          <CallToActionBanner />
        </div>
      </div>
      
    <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
