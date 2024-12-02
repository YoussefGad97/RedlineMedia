import React, { useState, useEffect, useRef } from "react";
import "../styles/About.scss"; // Ensure this points to the correct SCSS file
import BackToTop from "../components/BackToTop"; // Ensure the file path is correct
import CallToActionBanner from "../components/CallToActionBanner";
import Footer from "../components/Footer";
import landingImage from "../assets/images/About.png"; // Replace with your actual image path
import AboutImageText from "../components/AboutImageText";
import Team from "../components/Team";
import Mission from "../components/Mission";

const About = () => {
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

  return (
    <div className="about">
      <section className="about-landing">
        <div
          className="landing-image"
          style={{
            backgroundImage: `url(${landingImage})`,
          }}
        >
          <div className="landing-overlay">
            <h1>About Us</h1>
            <p>
              Discover our journey, values, and the passion that drives us to
              deliver excellence. Let's build something remarkable together.
            </p>
          </div>
        </div>
      </section>

      {/* Each section now has its own ref and index */}
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className="fade-in-section"
      >
        <AboutImageText />
      </div>

      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className="fade-in-section"
      >
        <Team />
      </div>

      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className="fade-in-section"
      >
        <Mission />
      </div>

      <div
        ref={(el) => (sectionRefs.current[3] = el)}
        className="fade-in-section"
      >
        <CallToActionBanner />
      </div>

      <div
        ref={(el) => (sectionRefs.current[4] = el)}
        className="fade-in-section"
      >
        <Footer />
      </div>

      <BackToTop />
    </div>
  );
};

export default About;
