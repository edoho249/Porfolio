import React from "react";
import "../styles/Experience.css";

const experiences = [
  { year: "2025", role: "Frontend Developer Intern", place: "Tech Studio" },
  { year: "2024", role: "Freelance Web Developer", place: "Self-employed" },
  { year: "2023", role: "Freelancer", place: "Self-employed" },
];

const Experience = () => (
  <div className="experience">
    <h2>Experience</h2>

    <div className="timeline">
      {experiences.map((exp) => (
        <div key={exp.year} className="timeline-item">
          <span>{exp.year}</span>
          <div>
            <h3>{exp.role}</h3>
            <p>{exp.place}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="experience-stats">
      <div className="stat-box">
        <h3>20+</h3>
        <p>Projects Completed</p>
      </div>
      <div className="stat-box">
        <h3>15+</h3>
        <p>Happy Clients</p>
      </div>
    </div>
  </div>
);

export default Experience;
