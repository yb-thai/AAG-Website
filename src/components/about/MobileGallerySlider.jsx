// src/components/about/MobileGallerySlider.jsx
import React from "react";

const MobileGallerySlider = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="mobile-slider">
      <div className="mobile-slider-inner">
        {items.map((item, index) => (
          <div className="mobile-slide" key={index}>
            <img src={item.src} alt={item.alt || item.caption || ""} />
            {item.caption && (
              <p className="mobile-caption">{item.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileGallerySlider;
