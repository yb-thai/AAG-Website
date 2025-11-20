import React, { useState } from "react";

const GallerySlider = ({ items }) => {
  const [current, setCurrent] = useState(0);

  if (!items || items.length === 0) return null;

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const active = items[current];

  return (
    <div className="gallery-slider">
      <figure className="gallery-item">
        <img src={active.src} alt={active.alt || active.caption || ""} />
        {active.caption && <figcaption>{active.caption}</figcaption>}
      </figure>

      <div className="gallery-controls">
        <button type="button" className="gallery-arrow" onClick={goPrev}>
          ‹
        </button>

        <div className="gallery-dots">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                "gallery-dot" +
                (index === current ? " gallery-dot--active" : "")
              }
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        <button type="button" className="gallery-arrow" onClick={goNext}>
          ›
        </button>
      </div>
    </div>
  );
};

export default GallerySlider;
