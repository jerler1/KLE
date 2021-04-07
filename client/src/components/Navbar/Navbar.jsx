import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Navbar.scss";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
// import Logo from "../../assets/index"

const Navbar = () => {
  const location = useLocation();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });

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
            <div className="brand-logo">
              <div className="logo-wrapper">
                <Link to="/"><Logo /></Link>
              </div>
            </div>
            <div className="contactUsButton">
              <Button className="button secondaryButton">
                Contact <span className="logoVisibility">Us</span>
              </Button>
            </div>
          </section>
          <section className="mobileNavbarBottomWrapper">
            <ul className="mobileDropdownWrapper">
              <DropdownMenu message="Our Work" menu="one">
                <ul>
                  <li
                    className={
                      location.pathname === "/"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/">Why Us</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/">Portfolio</Link>
                  </li>
                </ul>
              </DropdownMenu>
              <DropdownMenu message="About Us" menu="two">
                <ul>
                  <li
                    className={
                      location.pathname === "/"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/">Who We Are</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/">Our Services</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/">Join Our Team</Link>
                  </li>
                </ul>
              </DropdownMenu>
              <DropdownMenu message="Resources" menu="three">
                <ul>
                  <li
                    className={
                      location.pathname === "/"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/">FAQs</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/">Our Partners</Link>
                  </li>
                </ul>
              </DropdownMenu>
            </ul>
          </section>
        </>
      )}
      {!isTabletOrMobile && (
        <>
          <div className="brand-logo">
            <div className="logo-wrapper">
              <Link to="/"><Logo /></Link>
            </div>
          </div>
          <div className="nav-links">
            <div className="navWrapper">
              <ul className="navDropdown">
                <DropdownMenu message="Our Work" menu="one">
                  <ul>
                    <li
                      className={
                        location.pathname === "/portfolio"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/">Why Us</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/">Portfolio</Link>
                    </li>
                  </ul>
                </DropdownMenu>
                <DropdownMenu message="About Us" menu="two">
                  <ul>
                    <li
                      className={
                        location.pathname === "/"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/">Who We Are</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/">Our Services</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/">Join Our Team</Link>
                    </li>
                  </ul>
                </DropdownMenu>
                <DropdownMenu message="Resources" menu="three">
                  <ul>
                    <li
                      className={
                        location.pathname === "/"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/">FAQs</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/">Our Partners</Link>
                    </li>
                  </ul>
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
