import React from "react";
import ReactMovingLogo from "./ReactMovingLogo";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

const FooterSec = () => {
  return (
    <footer className="container-fluid mt-5 footer-con  py-5 px-4">
      <div className="d-flex flex-column footer-con-con flex-md-row align-items-center justify-content-between text-white">
        {/* Logo and Name */}
        <div className="d-flex align-items-center gap-2 mb-3 mb-md-0">
          <ReactMovingLogo />
          <h4 className="m-0 p-0">Muhammad Aqib</h4>
        </div>

        {/* Role and copyright */}
        <div className="d-flex flex-column align-items-center mb-3 mb-md-0">
          <h5 className="mb-1">Frontend Developer & UI Designer</h5>
          <p className="m-0 p-0 text-secondary mb-0 text-center">
            &copy; {new Date().getFullYear()} M_AQIB. All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="d-flex gap-3">
          <FaGithub
            className="biicons biiconssocial"
            cursor="pointer"
            size={25}
          />

          <FaLinkedin
            className="biicons biiconssocial"
            cursor="pointer"
            size={25}
          />

          <SocialIcon
            href="https://wa.me/966503091340?text=Hello%20Mr%20Aqib"
            style={{ height: 28, width: 28 }}
            network="whatsapp"
            bgColor="#468849ff"
            cursor="pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSec;
