import React from "react";
import "../styles/Services.css";
import { FaMobileAlt, FaCogs, FaServer, FaCode } from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt className="service-icon" />,
    title: "Mobile Development",
    desc: "Building sleek, responsive mobile-friendly web apps with great performance and smooth user experiences.",
  },
  {
    icon: <FaServer className="service-icon" />,
    title: "API Integration",
    desc: "Seamlessly connecting frontends to APIs and databases for dynamic, data-driven applications.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "Maintenance & Support",
    desc: "Providing continuous updates, debugging, and performance optimization to keep your site running perfectly.",
  },
  {
    icon: <FaCode className="service-icon" />,
    title: "Custom Web Solutions",
    desc: "Creating tailor-made websites and dashboards built with React, HTML, CSS, and JavaScript.",
  },
];

const Services = () => (
  <div className="services">
    <h2>My Services</h2>
    <p className="services-intro">
      I specialize in building modern, responsive web experiences with clean UI, smooth functionality, and lasting performance.
    </p>

    <div className="services-grid">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          {service.icon}
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
