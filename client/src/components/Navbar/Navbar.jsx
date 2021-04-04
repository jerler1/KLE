import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./Navbar.scss";
import { arrowDown, Logo } from "../../assets/index";

const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const [isMenuOneActive, setIsMenuOneActive] = useState(false);
  const [isMenuTwoActive, setIsMenuTwoActive] = useState(false);
  const [isMenuThreeActive, setIsMenuThreeActive] = useState(false);
  const [toggleMenuState, setToggleMenuState] = useState({
    menuOne: false,
    menuTwo: false,
    menuThree: false,
  });

  useEffect(() => {
    const outsideClickCloseMenu = (event) => {
      let menuRef;
      const { menuOne, menuTwo, menuThree } = toggleMenuState;
      if (menuOne) {
        menuRef = menuOneRef;
      }
      if (menuTwo) {
        menuRef = menuTwoRef;
      }
      if (menuThree) {
        menuRef = menuThreeRef;
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
        document.removeEventListener("click", outsideClickCloseMenu);
      }
    };
    if (isMenuOneActive || isMenuTwoActive || isMenuThreeActive) {
      document.addEventListener("click", outsideClickCloseMenu, true);
    }
  }, [isMenuOneActive, isMenuTwoActive, isMenuThreeActive]);

  // Making references for the menu's.
  const menuOneRef = useRef();
  const menuTwoRef = useRef();
  const menuThreeRef = useRef();

  const toggleMenu = (event) => {
    let { name, value } = event.currentTarget;
    console.log(name);
    value = JSON.parse(value);
    setToggleMenuState({ ...toggleMenuState, [name]: !value });
  };

  const closeMenu = () => {
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
              <li>
                <button
                  onClick={toggleMenu}
                  name="menuOne"
                  value={isMenuOneActive}
                >
                  Our Work
                  <span>
                    <img src={arrowDown} alt="arrow down" />
                  </span>
                </button>
                {/* <Dropdown
                  ref={menuOneRef}
                  className={
                    isMenuOneActive ? "menu menuOne active" : "menu menuOne"
                  }
                >
                  <Link to="/" onClick={closeMenu}>
                    Why Us
                  </Link>
                  <Link to="/" onClick={closeMenu}>
                    Portfolio
                  </Link>
                </Dropdown> */}
              </li>
              <li>
                <button
                  onClick={toggleMenu}
                  name="menuTwo"
                  value={isMenuTwoActive}
                >
                  About Us
                  <span>
                    <img src={arrowDown} alt="arrow down" />
                  </span>
                </button>
                <div
                  ref={menuTwoRef}
                  className={
                    isMenuTwoActive
                      ? "menu menuTwo active"
                      : "menu menuTwo"
                  }
                >
                  <Link to="/" onClick={closeMenu}>
                    Who We Are
                  </Link>
                  <Link to="/" onClick={closeMenu}>
                    Our Services
                  </Link>
                  <Link to="/" onClick={closeMenu}>
                    Join Our Team
                  </Link>
                </div>
              </li>
              <li>
                <button
                  onClick={toggleMenu}
                  name="menuThree"
                  value={isMenuThreeActive}
                >
                  Resources
                  <span>
                    <img src={arrowDown} alt="arrow down" />
                  </span>
                </button>
                <div
                  ref={menuThreeRef}
                  className={
                    isMenuThreeActive
                      ? "menu menuThree active"
                      : "menu menuThree"
                  }
                >
                  <Link to="/" onClick={closeMenu}>
                    FAQs
                  </Link>
                  <Link to="/" onClick={closeMenu}>
                    Our Partners
                  </Link>
                </div>
              </li>
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
                <li>
                  <button
                    onClick={toggleMenu}
                    name="menuOne"
                    value={isMenuOneActive}
                  >
                    Our Work
                    <span>
                      <img src={arrowDown} alt="arrow down" />
                    </span>
                  </button>
                  <div
                    ref={menuOneRef}
                    className={
                      isMenuOneActive
                        ? "menu menuOne active"
                        : "menu menuOne"
                    }
                  >
                    <Link to="/" onClick={closeMenu}>
                      Why Us
                    </Link>
                    <Link to="/" onClick={closeMenu}>
                      Portfolio
                    </Link>
                  </div>
                </li>
                <li>
                  <button
                    onClick={toggleMenu}
                    name="menuTwo"
                    value={isMenuTwoActive}
                  >
                    About Us
                    <span>
                      <img src={arrowDown} alt="arrow down" />
                    </span>
                  </button>
                  <div
                    ref={menuTwoRef}
                    className={
                      isMenuTwoActive
                        ? "menu menuTwo active"
                        : "menu menuTwo"
                    }
                  >
                    <Link to="/" onClick={closeMenu}>
                      Who We Are
                    </Link>
                    <Link to="/" onClick={closeMenu}>
                      Our Services
                    </Link>
                    <Link to="/" onClick={closeMenu}>
                      Join Our Team
                    </Link>
                  </div>
                </li>
                <li>
                  <button
                    onClick={toggleMenu}
                    name="menuThree"
                    value={isMenuThreeActive}
                  >
                    Resources
                    <span>
                      <img src={arrowDown} alt="arrow down" />
                    </span>
                  </button>
                  <div
                    ref={menuThreeRef}
                    className={
                      isMenuThreeActive
                        ? "menu menuThree active"
                        : "menu menuThree"
                    }
                  >
                    <Link to="/" onClick={closeMenu}>
                      FAQs
                    </Link>
                    <Link to="/" onClick={closeMenu}>
                      Our Partners
                    </Link>
                  </div>
                </li>
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
