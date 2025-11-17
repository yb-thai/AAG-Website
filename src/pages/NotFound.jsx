// src/pages/NotFound.jsx
import React from "react";
import Button from "../components/common/Button";

const NotFound = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="section-inner notfound">
          <h1 className="page-title">Page not found</h1>
          <p className="page-subtitle">
            The page you’re looking for doesn’t exist.
          </p>
          <Button to="/">Back to Home</Button>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
