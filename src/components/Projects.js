// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Import your Projects section CSS

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and hosted on Azure Static Web Apps.',
      techStack: ['React', 'CSS', 'Azure'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'E-commerce Platform',
      description: 'A fully functional e-commerce platform built with Node.js, Express, and MongoDB.',
      techStack: ['Node.js', 'Express', 'MongoDB'],
      liveLink: '#',
      codeLink: '#',
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
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
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
