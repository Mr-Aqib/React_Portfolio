import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ children, axis = "Y", duration = 0.6 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // animate again on re-entry
    threshold: 0.2, // start animation when 20% visible
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(inView);
  }, [inView]);

  // 🔹 built-in distance = 100px
  const direction = () =>
    axis === "X"
      ? visible
        ? "translateX(0px)"
        : "translateX(50px)"
      : visible
      ? "translateY(0px)"
      : "translateY(50px)";

  return (
    <div
      ref={ref}
      className="scroll-animate"
      style={{
        opacity: visible ? 1 : 0,
        transform: direction(),
        transition: `all ${duration}s ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
