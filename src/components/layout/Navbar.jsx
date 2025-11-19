// src/components/layout/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => (
  <header className="navbar">
    <div className="navbar-inner">
      <Link to="/" className="navbar-logo">
        <span className="logo-main">AAG Cabulance</span>
        <span className="logo-sub">Non-Emergency Medical Transportation</span>
      </Link>

      <nav className="navbar-links">
        <Link to="/#hero" className="nav-link">
          Home
        </Link>
        <Link to="/#about" className="nav-link">
          About
        </Link>
        <Link to="/#contact" className="nav-link">
          Contact
        </Link>

        <NavLink to="/booking" className="nav-link nav-link-primary">
          Book Now
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Navbar;
