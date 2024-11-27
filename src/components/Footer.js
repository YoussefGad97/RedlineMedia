import React from "react";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>About Us</h4>
          <a href="/about">Our Story</a>
          <a href="/team">Meet the Team</a>
          <a href="/careers">Careers</a>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <a href="/services">What We Do</a>
          <a href="/pricing">Pricing</a>
          <a href="/testimonials">Testimonials</a>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <a href="/contact">Get in Touch</a>
          <a href="/faq">FAQ</a>
          <a href="/support">Support</a>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
