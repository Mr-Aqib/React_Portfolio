import React from "react";
import Carousel from "./Carousel/Carousel";
import { countries } from "./Carousel/Data";
import JsCountUp from "./Carousel/JsCountUp";
import ScrollAnimation from "./ScrollAnimation";
import WorkTogether from "./WorkTogether";

const Project = () => {
  return (
    <>
      <div className="container-fluidd">
        {/* Section: Title + Carousel */}
        <ScrollAnimation axis="Y">
          <div className="d-flex flex-column">
            <div className="text-center">
              <h3 className="what-build d-inline-block shadow p-3 rounded-5 display-6">
                What I’ve Built
              </h3>
            </div>
            <div className="container mt-4 d-flex flex-column align-items-center justify-content-center">
              <Carousel images={countries} />
            </div>
          </div>
        </ScrollAnimation>

        {/* CountUp outside ScrollAnimation */}
        <div className="container mt-4 d-flex flex-column align-items-center justify-content-center">
          <JsCountUp />
        </div>

        {/* WorkTogether Section */}
        <ScrollAnimation axis="Y">
          <div className="bg-dark worktoghter-con p-5 d-flex align-items-center justify-content-center">
            <WorkTogether />
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Project;
