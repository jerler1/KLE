import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Navbar.scss";
import { arrowDown, Logo } from "../../assets/index";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const closeMenu = () => {
    console.log("attempting to close");
    setIsMenuOneActive(false);
    setToggleMenuState({
      menuOne: false,
      menuTwo: false,
      menuThree: false,
    });
  };

  return (
    <nav
      className={
        isTabletOrMobile
          ? "mobileNavbarContainer navbar"
          : "navbarContainer navbar"
      }
    >
      {isTabletOrMobile && (
        <>
          <section className="mobileNavbarTopWrapper">
            <div className="brand-logo-wrapper">
              <div className="brand-logo"></div>
            </div>
            <div className="contactUsButton">
              <Button className="button secondaryButton">Contact Us</Button>
            </div>
          </section>
          <section className="mobileNavbarBottomWrapper">
            <ul className="mobileDropdownWrapper">
              <DropdownMenu message="Our Work">
                <Link to="/" onClick={closeMenu}>
                  Why Us
                </Link>
                <Link to="/" onClick={closeMenu}>
                  Portfolio
                </Link>
              </DropdownMenu>
              <DropdownMenu message="About Us">
                <Link to="/" onClick={closeMenu}>
                  Who We Are
                </Link>
                <Link to="/" onClick={closeMenu}>
                  Our Services
                </Link>
                <Link to="/" onClick={closeMenu}>
                  Join Our Team
                </Link>
              </DropdownMenu>
              <DropdownMenu message="Resources">
                <Link to="/" onClick={closeMenu}>
                  FAQs
                </Link>
                <Link to="/" onClick={closeMenu}>
                  Our Partners
                </Link>
              </DropdownMenu>
            </ul>
          </section>
        </>
      )}
      {!isTabletOrMobile && (
        <>
          <div className="brand-logo"></div>
          <div className="nav-links">
            <div className="navWrapper">
              <ul className="navDropdown">
                <DropdownMenu message="Our Work">
                  <Link to="/" onClick={closeMenu}>
                    Why Us
                  </Link>
                  <Link to="/" onClick={closeMenu}>
                    Portfolio
                  </Link>
                </DropdownMenu>
                <DropdownMenu message="About Us">
                  <Link to="/" onClick={closeMenu}>
                    Who We Are
                  </Link>
                  <Link to="/" onClick={closeMenu}>
                    Our Services
                  </Link>
                  <Link to="/" onClick={closeMenu}>
                    Join Our Team
                  </Link>
                </DropdownMenu>
                <DropdownMenu message="Resources">
                  <Link to="/" onClick={closeMenu}>
                    FAQs
                  </Link>
                  <Link to="/" onClick={closeMenu}>
                    Our Partners
                  </Link>
                </DropdownMenu>
              </ul>
              <div className="contactUsButton">
                <Button className="button secondaryButton">Contact Us</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
