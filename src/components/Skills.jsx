import React from "react";
import "../styles/Skills.css";
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/js.png";
import reactLogo from "../assets/logos/react.png";
import nextLogo from "../assets/logos/nextjs.png";
import tailwindLogo from "../assets/logos/taailwindcss.png"; 
import gitLogo from "../assets/logos/git.png"; 
import figmaLogo from "../assets/logos/figma.png";

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Next.js", logo: nextLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Git", logo: gitLogo },
  { name: "Figma", logo: figmaLogo },
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills & Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-image-container">
              <img
                src={skill.logo}
                alt={skill.name}
                className={
                  skill.name === "React" || skill.name === "Tailwind CSS"
                    ? "large-logo"
                    : ""
                }
              />
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
