// src/components/common/Button.jsx
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, children, variant = "primary" }) => {
  const className =
    variant === "primary" ? "btn btn-primary" : "btn btn-outline";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
};

export default Button;
