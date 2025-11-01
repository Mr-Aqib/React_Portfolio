import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const WorkTogether = () => {
  return (
    <>
      <div className="col-lg-6 p-3 gap-4 d-flex flex-column align-items-center justify-content-center work-tog-con-con ">
        <h1 className="work-tog-h1 fw-bold text-center m-0 p-0">
          Do you have a Project Idea? Let's discuss your project!
        </h1>
        <p className="m-0 p-0 text-secondary text-center">
          I’m always open to collaborating on new and creative projects. Let’s
          connect and build something amazing!
        </p>
        <button className="work-tog-btn px-3 py-2 align-items-center gap-2 btn  d-flex flex-row">
          Lets Work Together
          <FaLongArrowAltRight />
        </button>
      </div>
    </>
  );
};

export default WorkTogether;
