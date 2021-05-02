import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import "./MobileFooter.scss";
import { instagram, podcast, yelp, email, phone } from "../../../assets/index";

const MobileFooter = () => {
  return (
    <footer className="mobileFooterContainer">
      <nav className="mobileFooterNav">
        <ul className="footerLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
          <li>
            <Link to="/join-our-team">Join Our Team</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <ul className="mobileFooterSocials">
          <li>
            <p>See Us in the Wild</p>
          </li>
          <li>
            <a
              href="https://www.yelp.com/biz/kinetic-lighting-and-electric-mill-valley"
              target="_blank"
              rel="noreferrer"
            >
              <img src={yelp} className="socialImage" alt="yelp" />
            </a>
          </li>
          <li>
            <Link to="/">
              <img src={instagram} className="socialImage" alt="instagram" />
            </Link>
          </li>
          <li>
            <a
              href="https://thetimfallershow.com/ep-141-breaking-the-gender-barriers-with-isabella-battig/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={podcast} className="socialImage" alt="podcast" />
            </a>
          </li>
        </ul>
      </nav>
      <aside className="mobileAside">
        <Button className="button secondaryButton flex">
          <span>
            <img src={phone} alt="phone" />
          </span>
          Call Us
        </Button>
        <Button className="button secondaryButton flex">
          <span>
            <img src={email} alt="email" />
          </span>
          Email Us
        </Button>
        <div>
          <p>Kinetic Lighting and Electric</p>
          <p>CA C10 License #838279</p>
        </div>
        <div>
          <p>Based in Mill Valley, CA</p>
          <p>Serving Marin, SF and the East Bay</p>
        </div>
      </aside>
      <section className="mobileCopyright">
        <p>Copyright Kinetic Lighting and Electric 2021</p>
        <p>Design by zoerem.com</p>
      </section>
    </footer>
  );
};

export default MobileFooter;
