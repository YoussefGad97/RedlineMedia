import { useState, useEffect } from "react";
import "../styles/Services.scss";
import CallToActionBanner from "../components/CallToActionBanner";
import Footer from "../components/Footer";
import ServiceCards from "../components/ServiceCards";
import BackToTop from "../components/BackToTop";
import ServicePackages from "../components/ServicePackages";
import landingImage from "../assets/images/Services.jpg";

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Sample service packages data
    const services = [
      {
        id: 1,
        name: 'Service 1',
        packages: [
          {
            id: 1,
            name: 'Package 1',
            description: 'A description of Package 1...',
            price: '$100',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
          },
          // ... add more packages
        ],
      },
      {
        id: 2,
        name: 'Service 2',
        packages: [
          {
            id: 1,
            name: 'Package 1',
            description: 'A description of Package 1...',
            price: '$100',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
          },
          // ... add more packages
        ],
      },
      // ... add more services
    ];

    return (
        <div className="services page-wrapper">
            <div className="content-wrapper">
                <section className="services-landing">
                    <div
                        className="landing-image"
                        style={{
                            backgroundImage: `url(${landingImage})`,
                        }}
                    >
                        <div className="landing-overlay">
                            <h1>Our Services</h1>
                            <p>
                                Discover our journey, values, and the passion that drives us to
                                deliver excellence. Let's build something remarkable together.
                            </p>
                        </div>
                    </div>
                </section>

                <ServiceCards />
                <ServicePackages services={services} />
                <CallToActionBanner />
            </div>
            <BackToTop />
            <Footer />
        </div>
    );
};

export default Services;
