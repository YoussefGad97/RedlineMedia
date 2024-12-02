import React, { useState, useEffect, useRef } from "react";
import "../styles/Services.scss";
import BackToTop from "../components/BackToTop";
import CallToActionBanner from "../components/CallToActionBanner";
import Footer from "../components/Footer";
import ServiceCards from "../components/ServiceCards";
import landingImage from "../assets/images/slide2.jpg";

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    const sectionRefs = useRef([]);

    // Screen size detection for mobile responsiveness
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Intersection Observer for fade-in effects
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1, // Trigger fade-in when 10% is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        }, observerOptions);

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="services">
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

            {/* ServiceCards Section */}
            <div
                ref={(el) => (sectionRefs.current[0] = el)}
                className="fade-in-section"
            >
                <ServiceCards />
            </div>

            {/* CallToActionBanner Section */}
            <div
                ref={(el) => (sectionRefs.current[1] = el)}
                className="fade-in-section"
            >
                <CallToActionBanner />
            </div>

            {/* Footer Section */}
            <div
                ref={(el) => (sectionRefs.current[2] = el)}
                className="fade-in-section"
            >
                <Footer />
            </div>

            <BackToTop />
        </div>
    );
};

export default Services;
