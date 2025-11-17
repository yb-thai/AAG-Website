import React, { useEffect, useRef } from "react";

const CalendlyEmbed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    const calendlyUrl = "https://calendly.com/ybthai98/ride-booking";

    function initWidget() {
      if (window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: containerRef.current,
          prefill: {},
          utm: {},
        });
      }
    }

    // If script tag already exists (from index.html), hook into it
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (existingScript) {
      if (window.Calendly) {
        // Script already loaded
        initWidget();
      } else {
        // Script not loaded yet — wait for it
        existingScript.addEventListener("load", initWidget);
      }

      return () => {
        existingScript.removeEventListener("load", initWidget);
      };
    }

    // Fallback: if for some reason there is no script yet, add it
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <div className="calendly-wrapper">
      <div
        ref={containerRef}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
};

export default CalendlyEmbed;
