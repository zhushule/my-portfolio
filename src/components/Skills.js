// src/components/Skills.js
import React from 'react';
import { FaReact, FaHtml5, FaPython, FaGitAlt, FaAngular, FaJava, FaAws, FaGithub, FaLinux, FaWindows, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiCplusplus, SiCsharp, SiMysql, SiPostman, SiVisualstudiocode, SiDotnet, SiMicrosoftazure } from 'react-icons/si';
import './Skills.css'; // Import your Skills section CSS

const Skills = () => {
  const skillCategories = [
    {
      category: 'Coding & Scripting',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'HTML/CSS', icon: <FaHtml5 /> },
        { name: 'C#', icon: <SiCsharp /> },
        { name: 'Java', icon: <FaJava /> },
        { name: '.Net', icon: <SiDotnet /> },
      ],
    },
    {
      category: 'Frameworks and Libraries',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Angular', icon: <FaAngular /> },
      ],
    },
    {
      category: 'Database Management',
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'SSMS', icon: <FaDatabase /> },
      ],
    },
    {
      category: 'Technologies and Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Linux', icon: <FaLinux /> },
        { name: 'Windows', icon: <FaWindows /> },
        { name: 'Microsoft Azure', icon: <SiMicrosoftazure /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'VS Code', icon: <SiVisualstudiocode /> },
        { name: 'Postman', icon: <SiPostman /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="skill-category">
          <h3>{category.category}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
