import React from "react";

const ChildLi = () => {
  return (
    <>
      <ul className="p-3 rounded-4 list-unstyled position-absolute d-flex flex-column gap-3 child-li">
        <li className="child-li-items">Birthday Reminder</li>
        <li className="child-li-items">Color Generator</li>
        <li className="child-li-items">Accordians</li>
        <li className="child-li-items">TodoList</li>
      </ul>
    </>
  );
};

export default ChildLi;
