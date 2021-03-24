import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { email, instagram, phone, podcast, yelp } from "../../assets/index";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <section className="footerContent">
        <aside className="businessInformation">
          <ul>
            <li>Kinetic Lighting and Electric CA C10 License #838279</li>
            <li className="basedIn">Based in Mill Valley, CA</li>
            <li className="servingMarin">Serving Marin, SF and the East Bay</li>
            <li className="image">
              <img className="phoneImage" src={phone} alt="phone" />
              415.569.7167
            </li>
            <li className="image imageMargin">
              <img className="emailImage" src={email} alt="email" />
              hello@kineticelectricsf.com
            </li>
          </ul>
        </aside>
        <div className="footerLinks">
          <ul className="footerNav">
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
          </ul>
          <ul className="footerInteract">
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
        </div>
      </section>
      <section>
        <p className="subFooter">
          Kinetic Lighting and Electric 2021 | Design by zoerem.com{" "}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
