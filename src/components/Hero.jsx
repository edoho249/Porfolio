import React from "react";
import "../styles/Hero.css";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m{" "}
        <span className="typed-name">
          <ReactTyped
            strings={["THE EDOHO"]}
            typeSpeed={100}
            backSpeed={60}
            loop
            showCursor={true}
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Frontend Developer • Designer • Innovator
      </motion.p>

      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <a href="#contact" className="btn-secondary">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
