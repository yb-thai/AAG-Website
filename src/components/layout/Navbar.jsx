import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Already on homepage → just scroll
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // On /booking go to home AND scroll after load
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link
  to="/"
  state={{ scrollTo: "hero" }}
  className="navbar-logo"
>
  <span className="logo-main">AAG Cabulance</span>
  <span className="logo-sub">Non-Emergency Medical Transportation</span>
</Link>

        <nav className="navbar-links">
          <a href="#hero" className="nav-link" onClick={(e) => handleNav(e, "hero")}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={(e) => handleNav(e, "about")}>
            About
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNav(e, "contact")}>
            Contact
          </a>

          <NavLink to="/booking" className="nav-link nav-link-primary">
            Book Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
