import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import chowrushImg from "../assets/images/chowrush.jpg";
import naijapulseImg from "../assets/images/naijapulse.jpg";
import ennImg from "../assets/images/enn.jpg";
import edoverseImg from "../assets/images/edoverse.jpg";
import watchtowerImg from "../assets/images/watchtower.jpg";
import ironbatImg from "../assets/images/ironbat.jpg";

const projects = [
  {
    id: 1,
    title: "ChowRush",
    description:
      "ChowRush is a modern React-based food ordering web app featuring an interactive shopping cart and secure Paystack payments — ideal for online food businesses.",
    image: chowrushImg,
    live: "https://chow-rush.vercel.app/",
    source: "https://github.com/edoho249/ChowRush",
  },
  {
    id: 2,
    title: "Naija Pulse",
    description:
      "A vibrant platform featuring Nigerian social news, global updates, crypto prices, and weather forecasts — built with React + Vite.",
    image: naijapulseImg,
    live: "https://naija-pulsee.vercel.app/",
    source: "https://github.com/edoho249/NaijaPulsee",
  },
  {
    id: 3,
    title: "Edoho’s News Network (ENN)",
    description:
      "ENN is a sleek, API-powered news website fetching real-time updates — built with React + Vite.",
    image: ennImg,
    live: "https://enn-delta.vercel.app/",
    source: "https://github.com/edoho249/ENN",
  },
  {
    id: 4,
    title: "Edoverse",
    description:
      "Edoverse is a dynamic, frontend-only learning platform built with React and Vite, featuring interactive courses and smooth animations.",
    image: edoverseImg,
    live: "https://edoverse.vercel.app/",
    source: "https://github.com/edoho249/Edoverse",
  },
  {
    id: 5,
    title: "Watchtower",
    description:
      "A demo movie site showcasing clean layouts, responsive design, and smooth UI transitions — delivering an engaging experience.",
    image: watchtowerImg,
    live: "https://watchtower-eight.vercel.app/",
    source: "https://github.com/edoho249/Watchtower",
  },
  {
    id: 6,
    title: "IronBat",
    description:
      "IronBat is a modern gadget showcase built with React + Vite — featuring sleek layouts and smooth animations for tech lovers.",
    image: ironbatImg,
    live: "https://iron-bat.vercel.app/",
    source: "https://github.com/edoho249/IronBat",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current, isHovered]);

  return (
    <section
      id="projects"
      className="projects-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="projects-title">My Projects</h2>

      <div className="project-container">
        <button className="arrow left" onClick={prevSlide}>
          <ArrowLeft />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={projects[current].id}
            className="project-card active"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="project-image">
              <img
                src={projects[current].image}
                alt={projects[current].title}
              />
            </div>

            <div className="project-details">
              <h3>{projects[current].title}</h3>
              <p>{projects[current].description}</p>

              <div className="project-links">
                <a
                  href={projects[current].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-demo"
                >
                  Live Demo
                </a>
                <a
                  href={projects[current].source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-source"
                >
                  <FaGithub className="github-icon" /> View Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="arrow right" onClick={nextSlide}>
          <ArrowRight />
        </button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Projects;
