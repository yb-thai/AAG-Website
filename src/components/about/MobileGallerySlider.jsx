import { motion } from "framer-motion";
import React, { useRef } from "react";

const MobileGallerySlider = ({ items }) => {
  const containerRef = useRef(null);

  return (
    <motion.div
      className="mobile-slider"
      ref={containerRef}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="mobile-slider-inner"
        drag="x"
        dragConstraints={{ left: -((items.length - 1) * 260), right: 0 }}
        dragElastic={0.1}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {items.map((item, index) => (
          <div className="mobile-slide" key={index}>
            <img src={item.src} alt={item.alt} />
            {item.caption && <p className="mobile-caption">{item.caption}</p>}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileGallerySlider;
