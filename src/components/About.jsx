import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import myPhoto from "../assets/images/me.PNG"; 

const About = () => {
  return (
    <div className="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.img
          src={myPhoto}
          alt="Edoho"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          I’m Praise Edoho, a passionate Frontend Developer specializing in React and UI/UX design. 
          I create modern, responsive, and interactive web experiences with a focus on clean design and smooth user flow.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
