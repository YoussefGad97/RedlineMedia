import { useState, useEffect } from "react";
import "../styles/Services.scss";
import CallToActionBanner from "../components/CallToActionBanner";
import Footer from "../components/Footer";
import ServiceCards from "../components/ServiceCards";
import landingImage from "../assets/images/Services.jpg";

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                <CallToActionBanner />
            </div>
            <Footer />
        </div>
    );
};

export default Services;
