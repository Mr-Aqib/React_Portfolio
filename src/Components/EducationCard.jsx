import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import ReactMovingLogo from "./ReactMovingLogo";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
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

          <h2 className="h2 m-0  display-4"> Education</h2>
        </div>
        <div className="d-flex flex-column align-items-center gap-4 ">
          {/* Card 1 */}
          <div className="d-flex eduglasscard col-12 col-lg-6 align-items-center gap-2 flex-column p-5 mt-4">
            <h2 className="m-0">B.S Software Engineering</h2>
            <p
              style={{
                color: "#a6b28b",
              }}
              className="m-0 p-0"
            >
              08-NOV-2022
            </p>
            <h5 className="m-0">Sir Syed CASE Institute of Technology</h5>
          </div>
        </div>
        <div className="d-flex mt-3 flex-row align-items-center justify-content-center gap-2">
          <MdOutlineCastForEducation
            size={35}
            className="edu-icon"
            color="#a6b28b"
          />

          <h2 className="h2 m-0  display-4">Certifcations</h2>
        </div>
        <div className="d-flex flex-column align-items-center gap-4 ">
          {/* Card 2 */}
          <div className="d-flex eduglasscard col-12 col-lg-6 align-items-center gap-2 flex-column  mt-4">
            <h2 className="m-0">MERN Stack</h2>
            <p
              style={{
                color: "#a6b28b",
              }}
              className="m-0 p-0"
            >
              08-NOV-2023
            </p>
            <div className="d-flex flex-row align-items-center gap-2">
              <ReactMovingLogo />
              <motion.div
                animate={{ y: [0, -5, 0], scale: [1, 1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <SiMongodb size={30} color="#199555" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0], scale: [1, 1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <FaNodeJs size={25} color="#F7DF1D" />
              </motion.div>
              <motion.div
                animate={{
                  x: [0, 5, 0, -5, 0],
                  scale: [1, 1.05, 1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <DiNodejs size={50} color="#7AB565" />
              </motion.div>
            </div>
            <p
              style={{
                color: "#a6b28b",
              }}
              className="m-0 p-0"
            >
              1 Year
            </p>
            <h5 className="m-0 p-0 ">Pny Trainings</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
