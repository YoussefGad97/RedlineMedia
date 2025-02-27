import { useState, useEffect } from "react";
import "../styles/Services.scss";
import Card1 from "../assets/images/Branding.jpg";
import Card2 from "../assets/images/SEO.jpg";
import Card3 from "../assets/images/Web.jpg";
import Card4 from "../assets/images/SocialMedia.jpg";
import Card5 from "../assets/images/Motion.jpg";
import Card6 from "../assets/images/landing1.jpg";

const MarketingServices = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [visible, setVisible] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    setVisible(true);
  }, []);

  // Sample marketing services data
  const services = [
    {
      id: 1,
      title: "Social Media Marketing",
      image: Card1,
      description:
        "Strategic planning and execution of social media campaigns across multiple platforms. We help businesses increase brand awareness, drive engagement, and convert followers into customers through targeted content and community management.",
      features: [
        "Content creation",
        "Campaign management",
        "Analytics & reporting",
        "Community engagement",
      ],
    },
    {
      id: 2,
      title: "Content Marketing",
      image: Card2,
      description:
        "Comprehensive content strategy and creation services that drive organic traffic and establish your brand as an industry leader. Our content marketing experts craft compelling stories that resonate with your target audience.",
      features: [
        "Blog posts",
        "Whitepapers",
        "Case studies",
        "Email newsletters",
      ],
    },
    {
      id: 3,
      title: "SEO Services",
      image: Card6,
      description:
        "Data-driven search engine optimization to improve your website's visibility and drive qualified traffic. We use the latest SEO techniques to help your business rank higher in search results for relevant keywords.",
      features: [
        "Keyword research",
        "On-page optimization",
        "Link building",
        "Technical SEO",
      ],
    },
    {
      id: 4,
      title: "PPC Advertising",
      image: Card3,
      description:
        "Results-focused pay-per-click advertising campaigns that maximize ROI. Our PPC specialists create and manage targeted campaigns across Google, Bing, and social media platforms to drive immediate results.",
      features: [
        "Campaign setup",
        "Ad creation",
        "Conversion tracking",
        "Budget optimization",
      ],
    },
    {
      id: 5,
      title: "Brand Development",
      image: Card4,
      description:
        "Comprehensive brand strategy and identity development to help your business stand out. We work with you to craft a compelling brand story, visual identity, and messaging that connects with your target audience.",
      features: [
        "Brand strategy",
        "Visual identity",
        "Brand guidelines",
        "Brand voice",
      ],
    },
    {
      id: 6,
      title: "Email Marketing",
      image: Card5,
      description:
        "Strategic email marketing campaigns that nurture leads and drive conversions. Our email marketing experts create personalized campaigns that deliver the right message to the right person at the right time.",
      features: [
        "Campaign strategy",
        "Email design",
        "List management",
        "Performance analysis",
      ],
    },
  ];

  const closeCard = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedCard(null);
      setIsClosing(false);
    }, 300); // Match this timing with your CSS animation duration
  };

  const handleCardClick = (id) => {
    if (selectedCard === id) {
      closeCard();
    } else {
      setSelectedCard(id);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeCard();
    }
  };

  const scrollToPackage = (serviceId) => {
    const packageSection = document.querySelector(`#package-${serviceId}`);
    if (packageSection) {
      packageSection.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedCard(null); // Close the card after clicking
  };

  const ExpandedCard = ({ service, onClose, onViewPackages }) => {
    return (
      <div className="expanded-card-content">
        <div className="expanded-image">
          <img src={service.image} alt={service.title} />
        </div>
        <div className="expanded-details">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <div className="button-container">
            <button className="packages-button" onClick={onViewPackages}>
              View Packages
            </button>
            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`marketing-services fade-in-section ${
        visible ? "fade-in" : ""
      }`}
    >
      <div className="cards-container">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${selectedCard === service.id ? 'expanded' : ''}`}
            onClick={() => handleCardClick(service.id)}
          >
            <div className="card-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="card-title">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div
          className={`modal-overlay ${isClosing ? "closing" : "opening"}`}
          onClick={handleOverlayClick}
        >
          <div className={`expanded-card ${isClosing ? "closing" : "opening"}`}>
            {services
              .filter((service) => service.id === selectedCard)
              .map((service) => (
                <ExpandedCard
                  key={service.id}
                  service={service}
                  onClose={closeCard}
                  onViewPackages={() => scrollToPackage(service.id)}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketingServices;
