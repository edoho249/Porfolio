import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = ({ sections }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (ref, id) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          const top = section.ref.current.getBoundingClientRect().top;
          if (top >= -50 && top < window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [sections]);

  return (
    <nav className="navbar">

<div className="navbar-logo" onClick={() => handleScroll(sections[0].ref, "home")}>
  <img src="/logo.png" alt="Edoho Logo" />
</div>


    
      <ul className="navbar-links desktop">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleScroll(section.ref, section.id)}
              className={activeSection === section.id ? "active" : ""}
            >
              {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
            </button>
          </li>
        ))}
      </ul>

    
      <div className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>

      {/* Mobile sidebar */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleScroll(section.ref, section.id)}
                className={activeSection === section.id ? "active" : ""}
              >
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
