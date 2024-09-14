// src/components/Skills.js
import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaPython, FaGitAlt } from 'react-icons/fa'; // Import some icons from react-icons
import './Skills.css'; // Import your Skills section CSS

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3 /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Git', icon: <FaGitAlt /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
