import React from "react";
import { Link, Outlet } from "react-router";
import "./App.css";
// import logo from "./logo.jpg";

export const App = () => {
  return (
    <>
      <header className="header">
        {/* <img src={""} alt="Logo" className="logo" /> */}
        <h1 className="header-title">EFFulgence</h1>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/sponsors">Sponsors</Link>
            </li>
            <li>
              <Link to="/speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/campusAmbassadors">Campus Ambassadors</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
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
