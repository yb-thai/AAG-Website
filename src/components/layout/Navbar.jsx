// src/components/layout/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-main">AAG Cabulance</span>
          <span className="logo-sub">Non-Emergency Medical Transportation</span>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>

          <NavLink to="/booking" className="nav-link nav-link-primary">
            Book Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
