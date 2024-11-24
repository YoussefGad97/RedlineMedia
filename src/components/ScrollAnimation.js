import React, { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import "../styles/components/ScrollAnimation.scss"; // Link your SCSS file

const ScrollSection = ({ children, className }) => {
  return (
    <InView
      as="div"
      className={className}
      triggerOnce
      threshold={0.1} // Adjust this for triggering when the element comes into view
    >
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`scroll-section ${inView ? "in-view" : ""} ${className}`}
        >
          {children}
        </div>
      )}
    </InView>
  );
};

const App = () => {
  return (
    <div className="app">
      <ScrollSection className="section-1">
        <h2>Section 1</h2>
        <p>This content animates in as you scroll down.</p>
      </ScrollSection>
      <ScrollSection className="section-2">
        <h2>Section 2</h2>
        <p>This content also animates in as you scroll down.</p>
      </ScrollSection>
      <ScrollSection className="section-3">
        <h2>Section 3</h2>
        <p>Keep scrolling, and see the magic happen!</p>
      </ScrollSection>
    </div>
  );
};

export default App;
