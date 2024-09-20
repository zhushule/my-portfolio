// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Import your Projects section CSS

const Projects = () => {
  const projects = [
    {
      title: 'My Shop',
      description: 'A full-stack e-commerce app built with React and ASP.NET Core. Hosted on Azure App Services and Azure Static Web Apps, with data stored in Azure SQL and images in Azure Blob Storage.',
      techStack: ['React', 'ASP.NET Core', 'Microsoft Azure', 'Material-UI'],
      liveLink: 'https://orange-coast-04ce4a30f.5.azurestaticapps.net',  // Live demo link
      codeLink: '#',  // Replace with GitHub repo or source code link if available
    },
    {
      title: 'My Authentication System',
      description: 'A full-stack web application with user authentication, admin dashboard, password reset via email, and personalized coupon recommendations. Built with React and ASP.NET Core (C#).',
      techStack: ['React', 'ASP.NET Core', 'C#', 'JavaScript', 'Axios'],
      liveLink: '',  // No live demo, so leave this blank or display "Run Locally"
      codeLink: 'https://github.com/zhushule/SimpleAuth',  // Replace with your GitHub repo link
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Tech Stack: {project.techStack.join(', ')}</p>
            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
