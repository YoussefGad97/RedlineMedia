import React, { useState } from "react";
import "../styles/components/CallToActionBanner.scss";

const CallToActionBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    console.log("Form data submitted:", formData);

    // Here you can add your email sending logic
    // For example, using EmailJS or an API endpoint

    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="cta-banner">
      <div className="cta-text">
        <h1>We'd Love to Hear From You!</h1>
        <p>
          Contact us today and let us know how we can assist you. Your feedback
          is important to us!
        </p>
      </div>
      <div className="cta-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            pattern="\d{11}"
            maxLength="11"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
        {submitted && (
          <p className="confirmation-message">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </div>
  );
};

export default CallToActionBanner;
