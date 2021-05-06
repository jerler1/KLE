import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Navbar.scss";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();
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
                <Link to="/">
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="contactUsButton">
              <Button
                className="button secondaryButton"
                onClick={() => {
                  history.push("/contact-us");
                }}
              >
                Contact <span className="logoVisibility">Us</span>
              </Button>
            </div>
          </section>
          <section className="mobileNavbarBottomWrapper">
            <ul className="mobileDropdownWrapper">
              <div className="mobileNavLink">
                <li
                  className={
                    location.pathname === "/portfolio"
                      ? "menu-navLink-active"
                      : "menu-navLink-inactive"
                  }
                >
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </div>
              {/* <DropdownMenu message="Our Work" menu="one">
                <ul>
                  <li
                    className={
                      location.pathname === "/why-us"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/why-us">Why Us</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/portfolio"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                </ul>
              </DropdownMenu> */}
              <DropdownMenu message="About Us" menu="two">
                <ul>
                  <li
                    className={
                      location.pathname === "/who-we-are"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/about">Who We Are</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/services"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/services">Our Services</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/join-our-team"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/join-our-team">Join Our Team</Link>
                  </li>
                </ul>
              </DropdownMenu>
              <div className="mobileNavLink">
                <li
                  className={
                    location.pathname === "/partners"
                      ? "menu-navLink-active"
                      : "menu-navLink-inactive"
                  }
                >
                  <Link to="/partners">Partners</Link>
                </li>
              </div>
              {/* <DropdownMenu message="Resources" menu="three">
                <ul>
                  <li
                    className={
                      location.pathname === "/faq"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/partners"
                        ? "menu-link-active"
                        : "menu-link-inactive"
                    }
                  >
                    <Link to="/partners">Our Partners</Link>
                  </li>
                </ul>
              </DropdownMenu> */}
            </ul>
          </section>
        </>
      )}
      {!isTabletOrMobile && (
        <>
          <div className="brand-logo">
            <div className="logo-wrapper">
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>
          <div className="nav-links">
            <div className="navWrapper">
              <ul className="navDropdown">
                <div className="navLink">
                  <li
                    className={
                      location.pathname === "/portfolio"
                        ? "menu-navLink-active"
                        : "menu-navLink-inactive"
                    }
                  >
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                </div>
                {/* <DropdownMenu message="Our Work" menu="one">
                  <ul>
                    <li
                      className={
                        location.pathname === "/why-us"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/why-us">Why Us</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/portfolio"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                  </ul>
                </DropdownMenu> */}
                <DropdownMenu message="About Us" menu="two">
                  <ul>
                    <li
                      className={
                        location.pathname === "/about"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/about">Who We Are</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/services"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/services">Our Services</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/join-our-team"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/join-our-team">Join Our Team</Link>
                    </li>
                  </ul>
                </DropdownMenu>
                <div className="navLink">
                  <li
                    className={
                      location.pathname === "/partners"
                        ? "menu-navLink-active"
                        : "menu-navLink-inactive"
                    }
                  >
                    <Link to="/partners">Partners</Link>
                  </li>
                </div>
                {/* <DropdownMenu message="Resources" menu="three">
                  <ul>
                    <li
                      className={
                        location.pathname === "/faq"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/partners"
                          ? "menu-link-active"
                          : "menu-link-inactive"
                      }
                    >
                      <Link to="/partners">Our Partners</Link>
                    </li>
                  </ul>
                </DropdownMenu> */}
              </ul>
              <div className="contactUsButton">
                <Button
                  className="button secondaryButton"
                  onClick={() => history.push("/contact-us")}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
