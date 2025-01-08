import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import "./App.css";

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <h1 className="header-title">EFFulgence</h1>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={() => setMenuOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/sponsors" onClick={() => setMenuOpen(false)}>
                Sponsors
              </Link>
            </li>
            <li>
              <Link to="/speakers" onClick={() => setMenuOpen(false)}>
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/campusAmbassadors" onClick={() => setMenuOpen(false)}>
                Campus Ambassadors
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <Outlet />
      </div>

      <footer className="footer">Designed by Team Effulgence'25</footer>
    </>
  );
};
