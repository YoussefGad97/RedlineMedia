import React from "react";
import "../styles/components/ImageTextBlock.scss"; // Import SCSS for styling
import imageBlock1 from "../assets/images/landing3.jpg";

const ImageTextBlock = () => {
  return (
    <div className="image-text-block container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 text-block">
          <h2>Our Vision</h2>
          <p>
            At Redline Media, we are dedicated to delivering exceptional
            services that help your business thrive. From creative brilliance to
            strategic execution, we ensure your brand stands out and achieves
            measurable results.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={imageBlock1}
            alt="Placeholder"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTextBlock;
