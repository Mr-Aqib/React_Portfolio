import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";

const EducationCard = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0  ">
        <div className="d-flex mt-3 flex-row align-items-center justify-content-center gap-2">
          <MdOutlineCastForEducation
            size={35}
            className="edu-icon"
            color="#a6b28b"
          />

          <h2 className="h2 m-0 display-4"> Education</h2>
        </div>
        <div className="d-flex flex-column align-items-center gap-4 p-2 ">
          <div className="d-flex mt-4 educationcard-1  eduglasscard col-lg-6 align-items-center gap-2 flex-column  p-5">
            <h2 className="m-0 ">B.S Software Engineering</h2>
            <p className="m-0 p-0">08-NOV-2022</p>
            <h5 className="m-0">Sir Syed CASE Institute of Technology</h5>
          </div>
          <div className="d-flex  educationcard-2 eduglasscard  col-lg-6 align-items-center gap-2 flex-column  p-5">
            <h2 className="m-0 ">B.S Software Engineering</h2>
            <p className="m-0 p-0">08-NOV-2022</p>
            <h5 className="m-0">Sir Syed CASE Institute of Technology</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
