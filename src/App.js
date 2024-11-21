import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Your Navbar component
import Home from "./pages/Home"; // Your Home page component
import About from "./pages/About"; // Example for About page
import Projects from "./pages/Projects"; // Example for Projects page
import Services from "./pages/Services"; // Example for Services page
import Contact from "./pages/Contact"; // Example for Contact page
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <Router>
      <div>
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
