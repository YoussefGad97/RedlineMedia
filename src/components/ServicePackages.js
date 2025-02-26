import React from 'react';
import Card1 from '../assets/images/Web.jpg';
import Card2 from '../assets/images/Web.jpg';
// ... import other images ...

const ServicePackages = ({ services }) => {
  return (
    <section className="service-packages">
      <h2>Service Packages</h2>
      <div className="packages-container">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`package ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <ul>
              {service.packages.map((servicePackage, index) => (
                <li key={index}>
                  <h4>{servicePackage.name}</h4>
                  <p>{servicePackage.description}</p>
                  <p>Price: {servicePackage.price}</p>
                  <ul>
                    {servicePackage.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePackages; 