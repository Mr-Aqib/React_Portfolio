import React from "react";
import ChildLi from "./ChildLi";

const ParentLi = () => {
  return (
    <>
      <ul className="p-3 rounded-4 list-unstyled position-absolute d-flex flex-column gap-3 parent-li">
        <li className="parent-li-items">Birthday Reminder</li>
        <li className="parent-li-items">Color Generator</li>
        <li className="parent-li-items">Accordians</li>
        <li className="parent-li-items">TodoList</li>
        <li className="parent-li-items">ShortCircuits</li>
        <li className="parent-li-items">Controlled Inputs</li>
        <li className="parent-li-items">Products Page Api</li>
        <li className="parent-li-items position-relative">
          Hooks
          <ChildLi />
        </li>
      </ul>
    </>
  );
};

export default ParentLi;
