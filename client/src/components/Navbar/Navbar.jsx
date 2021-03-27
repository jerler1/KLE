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
              <div className="menu menuTwo">
                <a href="#">Who We Are</a>
                <a href="#">Our Services</a>
                <a href="#">Join Our Team</a>
              </div>
            </li>
            <li>
              <button href="#">
                Resources
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </button>
              <div className="menu menuThree">
                <a href="#">FAQs</a>
                <a href="#">Our Partners</a>
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
