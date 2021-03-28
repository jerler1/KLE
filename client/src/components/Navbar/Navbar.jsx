import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { arrowDown } from "../../assets/index";

const Navbar = () => {
  const [toggleMenuState, setToggleMenuState] = useState({
    menuOne: false,
    menuTwo: false,
    menuThree: false,
  });

  useEffect(() => {
    const { menuOne, menuTwo, menuThree } = toggleMenuState;
    if (menuOne || menuTwo || menuThree) {
      document.addEventListener("click", closeMenu);
    }
  }, [toggleMenuState]);

  // Making references for the menu's.
  const menu = useRef();

  const toggleMenu = (event) => {
    let { name, value } = event.currentTarget;
    value = JSON.parse(value);
    setToggleMenuState({ ...toggleMenuState, [name]: !value });
  };

  const closeMenu = (event) => {
    if (menu.current && !menu.current.contains(event.target)) {
      setToggleMenuState({ menuOne: false, menuTwo: false, menuThree: false });
      document.removeEventListener("click", closeMenu);
    }
  };

  return (
    <nav className="navbarContainer">
      <div className="brand-logo"></div>
      <div className="nav-links">
        <div className="navWrapper">
          <ul className="navDropdown">
            <li>
              <button
                onClick={toggleMenu}
                name="menuOne"
                value={toggleMenuState.menuOne}
              >
                Our Work
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </button>
              <div
                ref={menu}
                className={
                  toggleMenuState.menuOne
                    ? "menu menuOne active"
                    : "menu menuOne"
                }
              >
                <Link to="/">Why Us</Link>
                <Link to="/">Portfolio</Link>
              </div>
            </li>
            <li>
              <button
                onClick={toggleMenu}
                name="menuTwo"
                value={toggleMenuState.menuTwo}
              >
                About Us
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </button>
              <div
                ref={menu}
                className={
                  toggleMenuState.menuTwo
                    ? "menu menuTwo active"
                    : "menu menuTwo"
                }
              >
                <Link to="/">Who We Are</Link>
                <Link to="/">Our Services</Link>
                <Link to="/">Join Our Team</Link>
              </div>
            </li>
            <li>
              <button
                onClick={toggleMenu}
                name="menuThree"
                value={toggleMenuState.menuThree}
              >
                Resources
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </button>
              <div
                ref={menu}
                className={
                  toggleMenuState.menuThree
                    ? "menu menuThree active"
                    : "menu menuThree"
                }
              >
                <Link to="/">FAQs</Link>
                <Link to="/">Our Partners</Link>
              </div>
            </li>
          </ul>
          <div className="contactUsButton">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
