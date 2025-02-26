import React, { useState, useEffect } from "react";
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

  // Screen size detection for mobile responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        {/* Landing Section */}
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

        <AboutImageText />
        <Team />
        <Mission />
        <CallToActionBanner />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
