import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./styles/Global.css";
import "./styles/Cursor.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services"; 
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrailEffect from "./components/TrailEffect";

function App() {
  // Cursor effect
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const hoverTargets = document.querySelectorAll("a, button, .clickable");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHoverEffect = () => cursor.classList.add("cursor-hover");
    const removeHoverEffect = () => cursor.classList.remove("cursor-hover");

    window.addEventListener("mousemove", moveCursor);
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  // refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null); 
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Sections i
  const sections = [
    { id: "home", component: <Hero />, ref: homeRef },
    { id: "about", component: <About />, ref: aboutRef },
    { id: "services", component: <Services />, ref: servicesRef }, 
    { id: "skills", component: <Skills />, ref: skillsRef },
    { id: "projects", component: <Projects />, ref: projectsRef },
    { id: "experience", component: <Experience />, ref: experienceRef },
    { id: "contact", component: <Contact />, ref: contactRef },
  ];

  return (
    <>
      {/* Glowing trail + cursor */}
      <TrailEffect />
      <div className="cursor"></div>

      {/* Navbar */}
      <Navbar sections={sections} />

      {/* Sections */}
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          ref={section.ref}
          className="page-section"
        >
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container">{section.component}</div>
          </motion.div>
        </section>
      ))}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
