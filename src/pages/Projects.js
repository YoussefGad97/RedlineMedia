import React from 'react';
import '../styles/Projects.scss';
import Project1 from "../assets/images/Web.jpg";
import Project2 from "../assets/images/Branding.jpg";
import Project3 from "../assets/images/SEO.jpg";
import Project4 from "../assets/images/Motion.jpg";
import Project5 from "../assets/images/Services.jpg";
import Project6 from "../assets/images/landing1.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      category: "Web Development",
      image: Project1,  // Replace with your actual image
      description: "Modern web application with responsive design",
      link: "#"
    },
    {
      id: 2,
      title: "Project Two",
      category: "Digital Marketing",
      image: Project2,  // Replace with your actual image
      description: "Comprehensive digital marketing campaign",
      link: "#"
    },
    {
      id: 3,
      title: "Project Three",
      category: "Branding",
      image: Project3,  // Replace with your actual image
      description: "Complete brand identity redesign",
      link: "#"
    },
    {
      id: 4,
      title: "Project Four",
      category: "Web Development",
      image: Project4,  // Replace with your actual image
      description: "E-commerce platform development",
      link: "#"
    },
    {
      id: 5,
      title: "Project Five",
      category: "Digital Marketing",
      image: Project5,  // Replace with your actual image
      description: "Social media marketing strategy",
      link: "#"
    },
    {
      id: 6,
      title: "Project Six",
      category: "Branding",
      image: Project6,  // Replace with your actual image
      description: "Brand guidelines and visual identity",
      link: "#"
    }
  ];

  return (
    <div className="projects-page">
      <div className="hero-section">
        <h1>Our Projects</h1>
        <p>Discover our latest work and success stories</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <a href={project.link} className="view-project">View Project</a>
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
    </div>
  );
};

export default Projects;
