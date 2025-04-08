import React, { useState } from "react";
import "../styles/Projects.scss";
import Project1 from "../assets/images/BakeryPage.png";
import Project2 from "../assets/images/RedlineMediaAds.png";
import Project3 from "../assets/images/Rapid.png";
import Project4 from "../assets/images/DoubleExposure.png";
import Project5 from "../assets/images/WebPortfolio.png";
import Project6 from "../assets/images/CrepeTown.png";
import Project7 from "../assets/images/MoviesApp.png";
import Project8 from "../assets/images/Qburger.png";
import Project9 from "../assets/images/Aurelia.png";
import Project10 from "../assets/images/Sweetopia.png";
import Project11 from "../assets/images/XStore.png";
import Project12 from "../assets/images/OmanCars.png";
import Project13 from "../assets/images/ElTarek.png";


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9; // Changed to show all 9 projects on one page

  const projects = [
    {
      id: 1,
      title: "The Bakery",
      category: "Web Development",
      image: Project1,
      description: "Custom Bakery Website for Ordering and Menu",
      link: "https://bakery-rho-cyan.vercel.app/",
    },
    {
      id: 2,
      title: "Redline Media",
      category: "Digital Marketing",
      image: Project2,
      description: "Social Media Ads for Marketing Firm",
      link: "https://www.behance.net/gallery/220113389/Red-Line-%28Marketing%29",
    },
    {
      id: 3,
      title: "Rapid Delivery",
      category: "Social Media Ads",
      image: Project3,
      description: "Social Media Ads For a Package Delivery Service",
      link: "https://www.behance.net/gallery/220367997/Rapid",
    },
    {
      id: 4,
      title: "Double Exposure Graphic Designs",
      category: "Graphic Design",
      image: Project4,
      description: "Engaging motion graphics and animations",
      link: "https://www.behance.net/gallery/219975881/Double-Exposure",
    },
    {
      id: 5,
      title: "Web Designer Portfolio",
      category: "Web Development",
      image: Project5,
      description: "A Portfolio Page for a Web-developer or a UI/UX Designer",
      link: "https://fokir2.vercel.app/",
    },
    {
      id: 6,
      title: "Crepe Town Promo",
      category: "Digital Marketing",
      image: Project6,
      description: "Strategic marketing and branding for Crepe Restaurant",
      link: "#",
    },
    {
      id: 7,
      title: "Movies & Tv Entertainment Platform",
      category: "Web Development",
      image: Project7,
      description: "Custom Movie and Tv Series Web app",
      link: "https://movies-app-v2-0.vercel.app/",
    },
    {
      id: 8,
      title: "X Store",
      category: "Digital Marketing",
      image: Project11,
      description: "Digital Marketing For A Tech Store ",
      link: "https://www.behance.net/gallery/219766677/X-STORE",
    },
    {
      id: 9,
      title: "Sweetopia Sweets",
      category: "Digital Marketing",
      image: Project10,
      description: "Marketing Post For an Online Desert & Sweets Shop",
      link: "https://www.behance.net/gallery/219820927/Sweetopia",
    },
    {
      id: 11,
      title: "QBurger Restaurant",
      category: "Web Development",
      image: Project8,
      description: "Burger Restaurant Menu and Ordering Platform",
      link: "https://q-burger-brown.vercel.app/",
    },
    {
      id: 12,
      title: "Aurelia Jewlery",
      category: "Web Development",
      image: Project9,
      description:
        "Jewerly E-commerce Store for Ordering and Product Placement",
      link: "https://jewelry-xi.vercel.app/",
    },
    {
      id: 13,
      title: "Oman Cars Dealership",
      category: "Branding",
      image: Project12,
      description: "Car Dealership Digital Rebranding",
      link: "https://www.behance.net/gallery/219767151/Oman-Cars",
    },
    {
      id: 14,
      title: "El Tarek Furniture",
      category: "Social Media Ads",
      image: Project13,
      description: "Car Dealership Digital Rebranding",
      link: "https://www.behance.net/gallery/219767151/Oman-Cars",
    },
  ];

  const categories = [
    "all",
    "Web Development",
    "Graphic Design",
    "Digital Marketing",
    "Branding",
    "Social Media Ads",
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentPage(1);
  };

  return (
    <div className="projects-page">
      <div className="hero-section">
        <h1>Our Projects</h1>
        <p>Discover our latest work and success stories</p>
      </div>

      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              activeFilter === category ? "active" : ""
            }`}
            onClick={() => handleFilterChange(category)}
          >
            {category === "all" ? "All Projects" : category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {currentProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <a href={project.link} className="view-project">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-info">
              <span className="category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`pagination-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`pagination-btn ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
