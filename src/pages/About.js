import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.scss"; // Ensure this points to the correct SCSS file
import BackToTop from "../components/BackToTop"; // Ensure the file path is correct
import CallToActionBanner from "../components/CallToActionBanner";
import Footer from "../components/Footer";

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

  return (
    <div className="about">

      {/* CallToActionBanner */}

      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`fade-in-section ${
          fadeInElements.includes(sectionRefs.current[2]) ? "fade-in" : ""
        }`}
      >
        <CallToActionBanner />
      </div>

      {/* Footer */}

      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`fade-in-section ${
          fadeInElements.includes(sectionRefs.current[2]) ? "fade-in" : ""
        }`}
      >
        <Footer />
      </div>

      {/* Back to Top button */}
      <BackToTop />
    </div>
  );
};

export default Home;
