import React from 'react';
import '../styles/ServicePackages.scss';
import WebImage from '../assets/images/Web.jpg';
import SEOImage from '../assets/images/SEO.jpg';
import SocialMediaImage from '../assets/images/Web.jpg';
import ContentImage from '../assets/images/Web.jpg';
import BrandingImage from '../assets/images/Web.jpg';
import VideoImage from '../assets/images/Web.jpg';

const ServicePackages = ({ services }) => {
  const marketingServices = [
    {
      id: 1,
      title: "Web Design & Development",
      image: WebImage,
      description: "Custom website design and development solutions tailored to your business needs.",
      packages: [
        {
          name: "Basic Website",
          price: "$1,999",
          features: [
            "5 Pages Custom Design",
            "Mobile Responsive",
            "Contact Form",
            "Basic SEO Setup"
          ]
        },
        {
          name: "Professional Website",
          price: "$3,999",
          features: [
            "10 Pages Custom Design",
            "E-commerce Integration",
            "CMS Integration",
            "Advanced SEO Package"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "SEO Services",
      image: SEOImage,
      description: "Comprehensive SEO strategies to improve your search engine rankings.",
      packages: [
        {
          name: "SEO Starter",
          price: "$799/mo",
          features: [
            "Keyword Research",
            "On-Page Optimization",
            "Monthly Reports",
            "Local SEO"
          ]
        },
        {
          name: "SEO Professional",
          price: "$1,499/mo",
          features: [
            "Advanced Keyword Strategy",
            "Content Marketing",
            "Link Building",
            "Technical SEO"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Social Media Marketing",
      image: SocialMediaImage,
      description: "Strategic social media management and marketing campaigns.",
      packages: [
        {
          name: "Social Starter",
          price: "$599/mo",
          features: [
            "3 Platforms Management",
            "Weekly Posts",
            "Community Management",
            "Basic Analytics"
          ]
        },
        {
          name: "Social Pro",
          price: "$1,299/mo",
          features: [
            "5 Platforms Management",
            "Daily Posts",
            "Paid Advertising",
            "Advanced Analytics"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Content Marketing",
      image: ContentImage,
      description: "Strategic content creation and marketing to engage your audience.",
      packages: [
        {
          name: "Content Basic",
          price: "$699/mo",
          features: [
            "2 Blog Posts/Month",
            "Content Calendar",
            "Basic SEO",
            "Social Sharing"
          ]
        },
        {
          name: "Content Pro",
          price: "$1,399/mo",
          features: [
            "4 Blog Posts/Month",
            "Content Strategy",
            "Advanced SEO",
            "Email Newsletter"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Brand Development",
      image: BrandingImage,
      description: "Comprehensive branding solutions to establish your market presence.",
      packages: [
        {
          name: "Brand Starter",
          price: "$2,499",
          features: [
            "Logo Design",
            "Brand Guidelines",
            "Business Cards",
            "Social Media Kit"
          ]
        },
        {
          name: "Brand Professional",
          price: "$4,999",
          features: [
            "Complete Brand Identity",
            "Marketing Materials",
            "Website Design",
            "Brand Strategy"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Video Production",
      image: VideoImage,
      description: "Professional video production services for your marketing needs.",
      packages: [
        {
          name: "Video Basic",
          price: "$1,499",
          features: [
            "30-Second Video",
            "Basic Editing",
            "1 Revision",
            "Music License"
          ]
        },
        {
          name: "Video Pro",
          price: "$2,999",
          features: [
            "60-Second Video",
            "Advanced Editing",
            "3 Revisions",
            "Full Rights"
          ]
        }
      ]
    }
  ];

  return (
    <section className="service-packages">
      <div className="packages-container">
        {marketingServices.map((service, index) => (
          <div 
            key={service.id}
            id={`package-${service.id}`}
            className="package-card"
          >
            <div className="text-container">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="package-list">
                <h4>Packages Include:</h4>
                <ul className="features-grid">
                  {service.packages.map((pkg, pkgIndex) => (
                    <li key={pkgIndex} className="package-item">
                      <div className="package-header">
                        <span className="package-name">{pkg.name}</span>
                        <span className="package-price">{pkg.price}</span>
                      </div>
                      <ul className="feature-list">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="feature-item">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="choose-package-btn">Choose This Package</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePackages; 