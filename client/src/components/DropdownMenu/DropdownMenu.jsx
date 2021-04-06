import React, { useState, useRef, useEffect } from "react";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { arrowDown } from "../../assets/index";
import { useMediaQuery } from "react-responsive";
import "./DropdownMenu.scss";

const DropdownMenu = ({ children, message, menu }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li className="menu-container">
      <button onClick={onClick} value={isActive} className={isActive ? "" : ""}>
        <div className={` ${isActive ? "dropMenuActive" : "buttonName"}`}>{message}</div>
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
        <div
          ref={dropdownRef}
          className={isTabletOrMobile ? "mobile-menu" : "menu"}
        >
          {children}
        </div>
      </nav>
    </li>
  );
};

export default DropdownMenu;
