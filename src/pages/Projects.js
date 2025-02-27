import React, { useState } from 'react';
import '../styles/Projects.scss';
import Project1 from "../assets/images/Web.jpg";
import Project2 from "../assets/images/Branding.jpg";
import Project3 from "../assets/images/SEO.jpg";
import Project4 from "../assets/images/Motion.jpg";
import Project5 from "../assets/images/Services.jpg";
import Project6 from "../assets/images/landing1.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;  // Changed to show all 9 projects on one page

  const projects = [
    {
      id: 1,
      title: "Web Development",
      category: "Web Development",
      image: Project1,
      description: "Custom websites and web applications",
      link: "#"
    },
    {
      id: 2,
      title: "Branding Solutions",
      category: "Branding",
      image: Project2,
      description: "Complete brand identity and design",
      link: "#"
    },
    {
      id: 3,
      title: "SEO Optimization",
      category: "Digital Marketing",
      image: Project3,
      description: "Search engine optimization strategies",
      link: "#"
    },
    {
      id: 4,
      title: "Motion Graphics",
      category: "Digital Marketing",
      image: Project4,
      description: "Engaging motion graphics and animations",
      link: "#"
    },
    {
      id: 5,
      title: "Digital Services",
      category: "Web Development",
      image: Project5,
      description: "Comprehensive digital solutions",
      link: "#"
    },
    {
      id: 6,
      title: "Marketing Strategy",
      category: "Branding",
      image: Project6,
      description: "Strategic marketing and branding",
      link: "#"
    },
    {
      id: 7,
      title: "Web Development 2",
      category: "Web Development",
      image: Project1,
      description: "Custom websites and web applications",
      link: "#"
    },
    {
      id: 8,
      title: "Branding Solutions 2",
      category: "Branding",
      image: Project2,
      description: "Complete brand identity and design",
      link: "#"
    },
    {
      id: 9,
      title: "SEO Optimization 2",
      category: "Digital Marketing",
      image: Project3,
      description: "Search engine optimization strategies",
      link: "#"
    },
    {
        id: 10,
        title: "test",
        category: "Digital Marketing",
        image: Project3,
        description: "Search engine optimization strategies",
        link: "#"
      }
  ];

  const categories = ['all', 'Web Development', 'Digital Marketing', 'Branding'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
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
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => handleFilterChange(category)}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {currentProjects.map((project) => (
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

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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
