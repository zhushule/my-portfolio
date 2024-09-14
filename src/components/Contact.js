// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Import your Contact section CSS

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-icons">
        {/* Add your social media links here */}
      </div>
    </section>
  );
};

export default Contact;
