import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectGallery.scss";
import Project1 from "../assets/images/P1.jpeg";
import Project2 from "../assets/images/P2.jpeg";
import Project3 from "../assets/images/P12.jpeg";
import Project4 from "../assets/images/P5.jpg";
import Project5 from "../assets/images/P6.png";
import Project6 from "../assets/images/p7.png";

const ProjectGallery = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Web Design Project",
      image: Project5,
      category: "Web Design",
      size: "large", // Large project takes 2x2 space
      link: "/projects/web-design",
    },
    {
      id: 2,
      title: "Brand Identity",
      image: Project1,
      category: "Branding",
      size: "small",
      link: "/projects/branding",
    },
    {
      id: 3,
      title: "UI/UX Design",
      image: Project6,
      category: "Design",
      size: "small",
      link: "/projects/design",
    },
    {
      id: 4,
      title: "Social Media Campaign",
      image: Project3,
      category: "Marketing",
      size: "medium", // Medium project takes 1x2 space
      link: "/projects/marketing",
    },
    {
      id: 5,
      title: "Mobile App Design",
      image: Project2,
      category: "App Development",
      size: "small",
      link: "/projects/app-development",
    },
    {
      id: 6,
      title: "Brand Strategy",
      image: Project4,
      category: "Branding",
      size: "small",
      link: "/projects/branding",
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-gallery">
      <h2 className="gallery-header">Projects</h2>
      <div className="gallery-grid">
        {projects.map((project) => (
          <Link
            to={project.link}
            key={project.id}
            className={`gallery-item ${project.size}`}
          >
            <div className="item-content">
              <img src={project.image} alt={project.title} />
              <div className="item-overlay">
                <div className="overlay-content">
                  <h3>{project.title}</h3>
                  <p className="category">{project.category}</p>
                  <p className="view-more">View Project →</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
