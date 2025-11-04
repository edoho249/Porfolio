import React, { useState } from "react";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:edoho@example.com?subject=Contact from ${formData.name}&body=${formData.message}\n\nFrom: ${formData.email}`;
    window.location.href = mailto;
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>

     
      <div className="contact-info">
        <p>
          <FaWhatsapp className="contact-icon" />
          <a
            href="https://wa.me/2348148238997"
            target="_blank"
            rel="noopener noreferrer"
          >
            +2348148238997
          </a>
        </p>
        <p>
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/edoho249"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/edoho249
          </a>
        </p>
        <p>
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/praise-edoho-66b8512a7"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/praise-edoho-66b8512a7
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
