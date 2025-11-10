import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import { GiNotebook } from "react-icons/gi"; // for Command Line / CLI
import { MdOutlineDesignServices } from "react-icons/md"; // placeholder for UI design
import { AiOutlineClockCircle } from "react-icons/ai"; // for Time management
import { RiTeamLine } from "react-icons/ri"; // for Teamwork

const skills = [
  { name: "React.js", icon: <FaReact size={35} color="#61DBFB" /> },
  { name: "JavaScript", icon: <FaJs size={35} color="#F7DF1E" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={35} color="#7952B3" /> },
  { name: "CSS3", icon: <FaCss3Alt size={35} color="#264de4" /> },
  { name: "HTML5", icon: <FaHtml5 size={35} color="#e34c26" /> },
  { name: "Responsive Design", icon: <MdOutlineDesignServices size={35} /> },
  {
    name: "Cross-Browser Compatibility",
    icon: <MdOutlineDesignServices size={35} />,
  },
  { name: "UI Design Principles", icon: <MdOutlineDesignServices size={35} /> },
  { name: "Figma", icon: <FaFigma size={35} color="#F24E1E" /> },
  {
    name: "Version Control / Git",
    icon: <FaGitAlt size={35} color="#F05032" />,
  },
  { name: "Debugging and Testing", icon: <GiNotebook size={35} /> },
  { name: "Teamwork", icon: <RiTeamLine size={35} /> },
  { name: "Command Line / CLI", icon: <GiNotebook size={35} /> },
  { name: "Attention to Detail", icon: <MdOutlineDesignServices size={35} /> },
  { name: "Time Management", icon: <AiOutlineClockCircle size={35} /> },
];

const SkillSection = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <h3 className="text-center display-4 fw-bold text-light mt-4">Skills</h3>
      <div className="container-fluid">
        <div className="row mt-4 justify-content-around px-4 g-3 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-5 skill-glass-card p-4 d-flex flex-column justify-content-center align-items-center shadow rounded-4"
            >
              {skill.icon}
              <h5 className="m-0 text-center mt-2">{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
