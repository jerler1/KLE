import React, { useState, useRef, useEffect } from "react";
import { arrowDown } from "../../assets/index";
import "./DropdownMenu.scss";

const DropdownMenu = ({ children }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent, true);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent, true);
    };
  }, [isActive]);

  return (
    <li className="menu-container">
      <button
        onClick={onClick}
        className="menu-trigger"
        name="menuTwo"
        // value={isMenuTwoActive}
      >
        About Us
        <span>
          <img src={arrowDown} alt="arrow down" />
        </span>
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        {children}
      </nav>
    </li>
  );
};

export default DropdownMenu;
