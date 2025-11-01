import React from "react";
import Button from "./Button";
const HeroSection = () => {
  return (
    <>
      <div className="hero-sec-con container-fuid">
        <div
          style={{ height: "60vh" }}
          className="container text-center col-lg-6 d-flex flex-column align-items-center justify-content-center her-sec-con-con"
        >
          <h1 className="">
            I'm{" "}
            <span className="aqibspan position-relative">Muhammad Aqib</span>, a
            Professional Web Developer,Web Designer & Software Engineer
          </h1>
          <p className="p-0 m-0">
            I specialize in building responsive and scalable web applications
            using React.js and modern web technologies. I love solving complex
            problems
          </p>
          <div className="my-4">
            <Button linkcv="/aqibcv.pdf" content="View My CV" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
