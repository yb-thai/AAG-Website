import React from "react";

const CalendlyEmbed = () => {
  return (
    <div className="calendly-wrapper">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
};

export default CalendlyEmbed;
