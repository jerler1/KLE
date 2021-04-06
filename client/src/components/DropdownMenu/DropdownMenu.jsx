import React, { useRef } from "react";
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
    <li>
      <button onClick={onClick} value={isActive}>
        <div className={isActive ? "dropMenuActive" : "dropMenuInactive"}>
          {message}
        </div>
        <span>
          <img
            className={isActive ? "rotateArrow" : ""}
            src={arrowDown}
            alt="arrow down"
          />
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
