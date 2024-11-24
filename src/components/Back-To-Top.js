import React, { useState, useEffect } from "react";
import "../styles/components/BackToTop.scss"; // Import the SASS file

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <span>↑</span>
    </button>
  );
}

export default BackToTop;
