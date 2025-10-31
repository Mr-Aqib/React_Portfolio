import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import ScrollAnimation from "../ScrollAnimation";

const JsCountUp = () => {
  const { ref, inView } = useInView({ triggerOnce: false });
  const [counting, setCounting] = useState(false);
  useEffect(() => {
    if (inView) setCounting(true);
    else setCounting(false);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="p-4 counter-container container col-lg-7 rounded-4 bg-dark mt-5 d-flex flex-row align-items-center justify-content-between gap-4"
    >
      <ScrollAnimation axis="X">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2 className="display-2">
            {counting ? (
              <CountUp start={0} end={25} duration={4} suffix="+" />
            ) : (
              0
            )}
          </h2>
          <p className="m-0 p-0">Projects</p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation axis="Y">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2 className="display-2">
            {counting ? <CountUp start={0} end={5} duration={2} /> : 0}
          </h2>
          <p className="m-0 p-0">Companies</p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation axis="X">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2 className="display-2">
            {counting ? (
              <CountUp start={0} end={5} duration={3} suffix="+" />
            ) : (
              0
            )}
          </h2>
          <p className="m-0 p-0">Experience</p>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default JsCountUp;
