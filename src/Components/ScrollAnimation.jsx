import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ children, axis = "Y" }) => {
  const [show, setShow] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    setShow(inView);
  }, [inView]);

  const direction = () =>
    axis === "X"
      ? show
        ? "translateX(0px)"
        : "translateX(50px)"
      : show
      ? "translateY(0px)"
      : "translateY(100px)";

  return (
    <div
      ref={ref}
      className="Animation"
      style={{
        opacity: show ? 1 : 0,
        transform: direction(),
        transition: "all 0.5s",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
