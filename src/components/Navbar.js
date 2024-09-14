// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll'; // Smooth scrolling library
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500} className="navbar-logo">
          Shule Zhu
        </Link>
        <div className="navbar-links">
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
