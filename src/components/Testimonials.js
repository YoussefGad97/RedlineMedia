import React, { useState } from "react";
import "../styles/components/Testimonials.scss";

const testimonials = [
  {
    name: "John Doe",
    company: "ABC Corp",
    testimonial:
      "“Crescendo Media provided exceptional service. Their attention to detail is unmatched.”",
    expandedContent:
      "I am extremely satisfied with their performance. They understood our requirements and delivered on time with great quality. I highly recommend their services.",
  },
  {
    name: "Jane Smith",
    company: "XYZ Ltd.",
    testimonial:
      "“Amazing experience! Crescendo Media helped us grow our online presence significantly.”",
    expandedContent:
      "Their team was professional and efficient. The strategies they implemented have brought tangible results. They are the go-to experts for digital marketing.",
  },
  {
    name: "Mark Johnson",
    company: "Tech Innovations",
    testimonial:
      "“The best investment we made for our business. Highly recommend Crescendo Media!”",
    expandedContent:
      "From website development to social media management, Crescendo Media did it all. The results were beyond our expectations.",
  },
  {
    name: "Emma Williams",
    company: "Global Enterprises",
    testimonial:
      "“Professional, reliable, and always ahead of the curve. Great experience working with them.”",
    expandedContent:
      "Their creative solutions helped us stay ahead in a competitive market. They truly understand client needs and provide the best solutions.",
  },
  {
    name: "David Lee",
    company: "LMN Group",
    testimonial:
      "“Excellent service and timely delivery. Will definitely continue working with Crescendo.”",
    expandedContent:
      "The team at Crescendo Media is always on point with their work. They deliver high-quality results and keep communication clear throughout the process.",
  },
  {
    name: "Sarah Davis",
    company: "PQR Corp",
    testimonial:
      "“Crescendo Media is a game-changer. Their strategies are unparalleled in the industry.”",
    expandedContent:
      "They helped us increase leads and brand recognition. The campaign they developed was tailored specifically to our target audience.",
  },
];

const TestimonialCarousel = () => {
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);

  const handleExpand = (testimonial) => {
    setExpandedTestimonial(testimonial);
  };

  const handleClose = () => {
    setExpandedTestimonial(null);
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-left-box">
        <h2>Crescendo Media: Delivering Excellence</h2>
        <p>
          At Crescendo Media, we provide top-notch services to help businesses
          grow. Our clients' success stories are a testament to our dedication
          and expertise.
        </p>
        <h3>What Our Clients Say</h3>
      </div>

      <div className="testimonial-row">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-box"
            onClick={() => handleExpand(testimonial)}
          >
            <div className="testimonial-content">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-company">{testimonial.company}</p>
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </div>

      {expandedTestimonial && (
        <div className="expanded-testimonial" onClick={handleClose}>
          <div className="expanded-content">
            <h2>
              {expandedTestimonial.name} - {expandedTestimonial.company}
            </h2>
            <p className="testimonial-text">
              {expandedTestimonial.expandedContent}
            </p>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
