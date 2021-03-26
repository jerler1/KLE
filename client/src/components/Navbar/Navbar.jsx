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
              <a href="#">
                Our Work
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                About Us
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Resources
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </a>
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
