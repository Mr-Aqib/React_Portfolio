import React, { useRef, useState } from "react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import ParentLi from "./ParentLi";
import { CgWebsite } from "react-icons/cg";
import { TiThMenuOutline } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom"; // 👈 import NavLink

const Header = () => {
  const [projectarrow, setProjecrarrow] = useState(false);
  const [open, setOpen] = useState(false);
  const menu = useRef();

  const menuShow = () => {
    menu.current.classList.toggle("showmenu");
    setOpen(true);
  };

  const menuClose = () => {
    menu.current.classList.remove("showmenu");
    setOpen(false);
  };

  return (
    <>
      <div className="row header-con m-0 p-4 col-12 col-lg-12 justify-content-between align-items-center">
        <div className="d-flex col-lg-3 align-items-center justify-content-center position-relative">
          <div className="logodiv gap-2 d-flex align-items-center">
            <CgWebsite size={30} className="biicons" />
            <h3 className="display-5">Portfolio</h3>
          </div>
          <div className="position-absolute" style={{ right: "2%" }}>
            {open ? (
              <RxCross1
                onClick={menuClose}
                size={25}
                className="biicons biisocialmenu"
                cursor="pointer"
              />
            ) : (
              <TiThMenuOutline
                size={25}
                onClick={menuShow}
                className="biicons biisocialmenu"
                cursor="pointer"
              />
            )}
          </div>
        </div>

        {/* ✅ Menu Section */}
        <ul
          ref={menu}
          className="d-flex fw-medium col-12 col-lg-5 p-0 menu text-uppercase gap-2 list-unstyled flex-row align-items-center justify-content-around m-0 grandparentli"
        >
          {/* Home */}
          <li className="grandparent-list-items">
            <NavLink
              to="/Home"
              className="nav-link"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "inherit",
                color: isActive ? "#000" : "inherit",
                textDecoration: "none",
              })}
            >
              Home
            </NavLink>
          </li>

          {/* Education */}
          <li className="grandparent-list-items">
            <NavLink
              to="/Education"
              className="nav-link"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "inherit",
                color: isActive ? "#000" : "inherit",
                textDecoration: "none",
              })}
            >
              Education
            </NavLink>
          </li>

          {/* Projects with dropdown */}
          <li
            onMouseEnter={() => setProjecrarrow(true)}
            onMouseLeave={() => setProjecrarrow(false)}
            className="grandparent-list-items gap-1 align-items-center d-flex position-relative"
          >
            Projects
            {projectarrow ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
            <ParentLi />
          </li>

          {/* Experience */}
          <li className="grandparent-list-items">
            <NavLink
              to="/Experience"
              className="nav-link"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "inherit",
                color: isActive ? "#000" : "inherit",
                textDecoration: "none",
              })}
            >
              Experience
            </NavLink>
          </li>

          {/* Skills */}
          <li className="grandparent-list-items">
            <NavLink
              to="/Skills"
              className="nav-link"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "inherit",
                color: isActive ? "#000" : "inherit",
                textDecoration: "none",
              })}
            >
              Skills
            </NavLink>
          </li>
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
