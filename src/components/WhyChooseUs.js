import React from 'react';
import '../styles/WhyChooseUs.scss';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <h2 className="section-title text-center">Why Choose Us</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="reason-box">
              <i className="fas fa-rocket"></i>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround time for all your projects</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="reason-box">
              <i className="fas fa-gem"></i>
              <h3>Quality Work</h3>
              <p>Premium quality results that exceed expectations</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="reason-box">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer service and assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 