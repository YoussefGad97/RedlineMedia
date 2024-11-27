import React, { useState } from "react";
import "../styles/components/Testimonials.scss";

const testimonials = [
  {
    name: "John Doe",
    company: "ABC Corp",
    testimonial:
      "“Redline Media provided exceptional service. Their attention to detail is unmatched.”",
    expandedContent:
      "I am extremely satisfied with their performance. They understood our requirements and delivered on time with great quality. I highly recommend their services.",
  },
  {
    name: "Jane Smith",
    company: "XYZ Ltd.",
    testimonial:
      "“Amazing experience! Redline Media helped us grow our online presence significantly.”",
    expandedContent:
      "Their team was professional and efficient. The strategies they implemented have brought tangible results. They are the go-to experts for digital marketing.",
  },
  {
    name: "Mark Johnson",
    company: "Tech Innovations",
    testimonial:
      "“The best investment we made for our business. Highly recommend Redline Media!”",
    expandedContent:
      "From website development to social media management, Redline Media did it all. The results were beyond our expectations.",
  },
  {
    name: "Emma Williams",
    company: "Global Enterprises",
    testimonial:
      "“Professional, reliable, and always ahead of the curve. Great experience working with them.”",
    expandedContent:
      "Their creative solutions helped us stay ahead in a competitive market. They truly understand client needs and provide the best solutions.",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-carousel">
      <div className="testimonial-left-box">
        <h2>Redline Media: Delivering Excellence</h2>
        <p>
          At Redline Media, we provide top-notch services to help businesses
          grow. Our clients' success stories are a testament to our dedication
          and expertise.
        </p>
        <h3>What Our Clients Say</h3>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-box">
            <div className="testimonial-content">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-company">{testimonial.company}</p>
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
