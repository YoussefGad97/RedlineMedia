import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll"; // Import Locomotive Scroll
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import Locomotive Scroll styles
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"; // Your Navbar component
import Home from "./pages/Home"; // Your Home page component
import About from "./pages/About"; // Example for About page
import Projects from "./pages/Projects"; // Example for Projects page
import Services from "./pages/Services"; // Example for Services page
import Contact from "./pages/Contact"; // Example for Contact page

const App = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // Wrap your app content in this
      smooth: true, // Enable smooth scrolling
      inertia: 0.8, // Adjust scrolling speed
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing type for animations
      once: true, // Animate only once
    });

    // Cleanup Locomotive Scroll on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <Router>
      <div data-scroll-container>
        {" "}
        {/* Locomotive Scroll Container */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
