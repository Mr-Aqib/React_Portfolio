import React, { useState } from "react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import ParentLi from "./ParentLi";
import { CgWebsite } from "react-icons/cg";
const Header = () => {
  const [projectarrow, setProjecrarrow] = useState(false);

  return (
    <>
      <div className="row  header-con m-0 p-4 col-12 col-lg-12 justify-content-between align-items-center">
        <div className="logodiv col-lg-3 gap-2 d-flex align-items-center">
          <CgWebsite size={30} className="biicons" />
          <h3 className="display-5">Portfolio</h3>
        </div>
        <ul className="d-flex fw-medium col-12 col-lg-5 p-0 menu text-uppercase gap-2 list-unstyled flex-row align-items-center justify-content-around m-0 grandparentli">
          <li className="grandparent-list-items">Home</li>
          <li className="grandparent-list-items">Education</li>
          <li
            onMouseEnter={() => setProjecrarrow(true)}
            onMouseLeave={() => setProjecrarrow(false)}
            className="grandparent-list-items gap-1 align-items-center d-flex position-relative"
          >
            Projects
            {projectarrow ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
            <ParentLi />
          </li>
          <li className="grandparent-list-items"> Experience</li>
          <li className="grandparent-list-items">Skills</li>
        </ul>
        <div className="social col-lg-3 d-flex justify-content-end gap-2 align-items-center">
          <BiLogoGithub
            size={35}
            className="biicons biiconssocial"
            cursor="pointer"
          />
          <BiLogoLinkedin
            size={35}
            className="biicons biiconssocial"
            cursor="pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
