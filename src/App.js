// src/App.js
import React from 'react';
import './App.css'; // Import default styles or create your own
import HomePage from './components/HomePage';
import ProjectShowcase from './components/ProjectShowcase';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ProjectShowcase />
      <Blog />
      <ContactForm />
    </div>
  );
}

export default App;
