import React from "react";
import "../styles/Contact.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="contact-page page-wrapper">
      <div className="content-wrapper">
        <header className="contact-header">
          <div className="header-content">
            <h1>Contact Us</h1>
          </div>
        </header>

        <main className="contact-main">
          <div className="contact-left">
            <h2>Get In Touch</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" placeholder="Name" required aria-label="Name" />
              <input type="tel" name="phone" placeholder="Phone" required aria-label="Phone" />
              <input type="email" name="email" placeholder="Email" required aria-label="Email" />
              <textarea name="message" rows="5" placeholder="Your Message" required aria-label="Message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="contact-right">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4545354952736!2d31.34388891624721!3d30.055853924089963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d955a9b5305%3A0x6b56aef2282a53c2!2sRihana%20Plaza%20Mall!5e0!3m2!1sen!2seg!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
