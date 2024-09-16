// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Import your Contact section CSS

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScg-9D4D4T1WnizSqyas-LGXd7PnSTvQ1GdPeTNBvvrWFDQwg/viewform?embedded=true"  // Your Google Form link
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Contact Form"
      >
        Loading…
      </iframe>
    </section>
  );
};

export default Contact;
