import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Navbar.scss";
import { Logo } from "../../assets/index";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

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
              <DropdownMenu message="Our Work" menu="one">
                <Link to="/">Why Us</Link>
                <Link to="/">Portfolio</Link>
              </DropdownMenu>
              <DropdownMenu message="About Us" menu="two">
                <Link to="/">Who We Are</Link>
                <Link to="/">Our Services</Link>
                <Link to="/">Join Our Team</Link>
              </DropdownMenu>
              <DropdownMenu message="Resources" menu="three">
                <Link to="/">FAQs</Link>
                <Link to="/">Our Partners</Link>
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
                <DropdownMenu message="Our Work" menu="one">
                  <Link to="/">Why Us</Link>
                  <Link to="/">Portfolio</Link>
                </DropdownMenu>
                <DropdownMenu message="About Us" menu="two">
                  <Link to="/">Who We Are</Link>
                  <Link to="/">Our Services</Link>
                  <Link to="/">Join Our Team</Link>
                </DropdownMenu>
                <DropdownMenu message="Resources" menu="three">
                  <Link to="/">FAQs</Link>
                  <Link to="/">Our Partners</Link>
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
