import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      year: "2020 - Present",
      title: "Design Engineer",
      location: "Saudi Arabia",
      company: "alibaba",
    },
    {
      year: "2018 - 2020",
      title: "Engineer",
      location: "Pakistan",
      company: "alibaba",
    },
    {
      year: "2018 - 2020",
      title: "Junior  Engineer",
      location: "Pakistan",
      company: "alibaba",
    },
    {
      year: "2018 - 2020",
      title: "Junior  Engineer",
      location: "Pakistan",
      company: "alibaba",
    },
  ];

  return (
    <div className="container expcont py-5">
      <h3 className="text-center display-4 fw-bold text-light mb-5">
        Experience
      </h3>

      <div className="bg-dark expcardcon p-4 p-md-5 rounded-5 shadow-lg">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="expcard col-lg-7 mx-auto mb-4 p-4 rounded-4 shadow position-relative"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="d-flex align-items-center justify-content-between flex-row">
              <div className="text-secondary fw-semibold small">{exp.year}</div>
              <div className="text-end d-flex flex-column">
                <h4 className="text-light mb-1">{exp.title}</h4>
                <div className="d-flex flex-row gap-2">
                  <p className="text-secondary mb-0">{exp.location}</p>
                  <p className="text-secondary mb-0">{exp.company}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
