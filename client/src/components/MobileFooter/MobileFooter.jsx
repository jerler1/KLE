import React from "react";
import { Link } from "react-router-dom";
import "./MobileFooter.scss";
import { instagram, podcast, yelp } from "../../assets/index";

const MobileFooter = () => {
  return (
    <footer className="mobileFooterContainer">
      <nav className="mobileFooterNav">
        <ul className="footerLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">FAQs</Link>
          </li>
          <li>
            <Link to="/">Partners</Link>
          </li>
          <li>
            <Link to="/">Join Our Team</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
        <ul className="footerSocials">
          <li>
            <p>See Us in the Wild</p>
          </li>
          <li>
            <Link to="/">
              <img src={yelp} className="socialImage" alt="yelp" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={instagram} className="socialImage" alt="instagram" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={podcast} className="socialImage" alt="podcast" />
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="mobileAside">
        <button>Call Us</button>
        <button>Email Us</button>
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
        <p>Kinetic Lighting and Electric 2021</p>
        <p>Design by zoerem.com</p>
      </section>
    </footer>
  );
};

export default MobileFooter;
