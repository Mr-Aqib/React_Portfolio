import React from "react";
import Carousel from "./Carousel/Carousel";
import { countries } from "./Carousel/Data";

const Project = () => {
  return (
    <>
      <div className=" container-fluidd">
        <div className="text-center">
          <h3 className="what-build d-inline-block shadow p-3 rounded-5  display-6 ">
            What I’ve Built
          </h3>
        </div>
        <div className="container mt-4 d-flex align-items-center justify-content-center">
          <Carousel images={countries} />
        </div>
      </div>
    </>
  );
};

export default Project;
