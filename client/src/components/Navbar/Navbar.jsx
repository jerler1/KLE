import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { arrowDown } from "../../assets/index";

const Navbar = () => {
  const [toggleMenuOne, setToggleMenuOne] = useState(false);
  const [toggleMenuTwo, setToggleMenuTwo] = useState(false);
  const [toggleMenuThree, setToggleMenuThree] = useState(false);

  const toggleMenu = (event) => {
    console.log(event.target);
  }

  return (
    <nav className="navbarContainer">
      <div className="brand-logo"></div>
      <div className="nav-links">
        <div className="navWrapper">
          <ul className="navDropdown">
            <li>
              <button onClick={toggleMenu} name="menuOne">
                Our Work
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </button>
              <div className={toggleMenuOne ? "menu menuOne active" : "menu menuOne"}>
                <Link to="/">Why Us</Link>
                <Link to="/">Portfolio</Link>
              </div>
            </li>
            <li>
              <button onClick={toggleMenu} name="menuTwo">
                About Us
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </button>
              <div className={toggleMenuTwo ? "menu menuTwo active" : "menu menuTwo"}>
                <Link to="/">Who We Are</Link>
                <Link to="/">Our Services</Link>
                <Link to="/">Join Our Team</Link>
              </div>
            </li>
            <li>
              <button onClick={toggleMenu} name="menuThree">
                Resources
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
              </button>
              <div className={toggleMenuThree ? "menu menuThree active" : "menu menuThree"}>
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
