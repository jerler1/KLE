import React from "react";
import "./Navbar.scss";
import { arrowDown } from "../../assets/index";

const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <div className="brand-logo"></div>
      <div className="nav-links">
        <div className="navWrapper">
          <ul className="navDropdown">
            <li>
              <button href="#">
                Our Work
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </button>
              <div className="menu menuOne">
                  <a href="#">Why Us</a>
                  <a href="#">Portfolio</a>
              </div>
            </li>
            <li>
              <button href="#">
                About Us
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </button>
            </li>
            <li>
              <button href="#">
                Resources
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </button>
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
