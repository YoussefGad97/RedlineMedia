import { useState, useEffect } from "react";
import "../styles/Services.scss";
import CallToActionBanner from "../components/CallToActionBanner";
import Footer from "../components/Footer";
import ServiceCards from "../components/ServiceCards";
import BackToTop from "../components/BackToTop";
import ServicePackages from "../components/ServicePackages";
import landingImage from "../assets/images/Services.jpg";
import WebDesignImg from '../assets/images/Web.jpg';

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const marketingServices = [
        {
            id: 1,
            title: "Digital Marketing Strategy",
            image: WebDesignImg,
            description: "Comprehensive digital marketing strategies tailored to your business goals. We combine SEO, content marketing, and social media to drive growth.",
            packages: [
                {
                    name: "Starter Package",
                    price: "$1,500/mo",
                    features: [
                        "SEO Audit & Strategy",
                        "Content Calendar",
                        "Monthly Analytics Report",
                        "Social Media Management"
                    ]
                },
                {
                    name: "Professional Package",
                    price: "$3,500/mo",
                    features: [
                        "Full SEO Optimization",
                        "Weekly Blog Content",
                        "PPC Campaign Management",
                        "Email Marketing"
                    ]
                }
            ]
        },
        // Add more services following the same structure
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
                <ServicePackages services={marketingServices} />
                <CallToActionBanner />
            </div>
            <BackToTop />
            <Footer />
        </div>
    );
};

export default Services;
