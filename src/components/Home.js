// src/components/Home.js
import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'; // For smooth animations
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import illustration from '../assets/webdev.svg';
import resume from '../assets/Shule-Zhu-Resume.pdf'; // Import your PDF resume
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          <Typewriter
            options={{
              strings: ['Hi, I am Shule Zhu'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Software Developer / Software Engineer
        </motion.h2>
        <p>
        I am currently working at Capgemini as a Software Engineer
        </p>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://github.com/zhushule"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shule-zhu-600113199/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Resume Download Button */}
        <a href={resume} download="Shule_Zhu_Resume.pdf">
          <button className="resume-button">Resume</button>
        </a>
      </div>

       {/* Use the imported SVG file */}
       <div className="home-illustration">
        <img src={illustration} alt="Developer" />
      </div>
    </section>
  );
};

export default Home;
