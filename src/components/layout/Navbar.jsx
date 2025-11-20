import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => (
  <header className="navbar">
    <div className="navbar-inner">
      <Link to="/" className="navbar-logo">
        <span className="logo-main">AAG Cabulance</span>
        <span className="logo-sub">Non-Emergency Medical Transportation</span>
      </Link>

     <nav className="navbar-links">
  <a href="/#hero" className="nav-link">Home</a>
  <a href="/#about" className="nav-link">About</a>
  <a href="/#contact" className="nav-link">Contact</a>

  <NavLink to="/booking" className="nav-link nav-link-primary">
    Book Now
  </NavLink>
</nav>

     
    </div>
  </header>
);

export default Navbar;
