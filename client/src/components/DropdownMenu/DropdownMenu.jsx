import React, { useState, useRef, useEffect } from "react";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { arrowDown } from "../../assets/index";
import "./DropdownMenu.scss";

const DropdownMenu = ({ children, message, menu }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li className="menu-container">
      <button onClick={onClick} value={isActive}>
        {message}
        <span>
          <img src={arrowDown} alt="arrow down" />
        </span>
      </button>
      <nav
        className={`menu-wrapper ${isActive ? "active" : "inactive"} ${
          menu === "one"
            ? "menuOne"
            : menu === "two"
            ? "menuTwo"
            : menu === "three"
            ? "menuThree"
            : ""
        }`}
      >
        <div ref={dropdownRef} className="menu">
          {children}
        </div>
      </nav>
    </li>
  );
};

export default DropdownMenu;
