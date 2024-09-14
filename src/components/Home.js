// src/components/Home.js
import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion'; // For smooth animations
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
          I am currently working on exciting projects and constantly learning new technologies to enhance my development skills.
        </p>
        <div className="social-icons">
          {/* Add your social media icons here */}
        </div>
        <button className="resume-button">Resume</button>
      </div>
      <div className="home-illustration">
        <img src="path/to/illustration.png" alt="Developer" />
      </div>
    </section>
  );
};

export default Home;
