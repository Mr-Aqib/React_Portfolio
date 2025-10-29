import React from "react";
const Button = ({ content, linkcv }) => {
  return (
    <>
      <a
        href={linkcv}
        className="btnstyle btn shadow border px-5 rounded-5 py-2"
      >
        {content}
      </a>
    </>
  );
};

export default Button;
