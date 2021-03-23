import React from "react";
import "./Footer.css";
import {
  email,
  instagram,
  phone,
  podcast,
  yelp,
  background,
  pic1,
  pic2,
  pic3,
} from "../../assets/index";

const Footer = () => {
  return (
    <footer>
      <section className="footerContainer">
        <aside className="businessInformation">
          <ul>
            <li>Kinetic Lighting and Electric CA C10 License #838279</li>
            <li className="basedIn">Based in Mill Valley, CA</li>
            <li className="servingMarin">Serving Marin, SF and the East Bay</li>
            <li className="image">
              <img className="phoneImage" src={phone} />
              415.569.7167
            </li>
            <li className="image imageMargin">
              <img className="emailImage" src={email} />
              hello@kineticelectricsf.com
            </li>
          </ul>
        </aside>
        <div className="footerLinks">
          <ul className="footerNav">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
          <ul className="footerInteract">
            <li>
              <a>FAQs</a>
            </li>
            <li>
              <a>Partners</a>
            </li>
            <li>
              <a>Join Our Team</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
          <ul className="footerSocials">
            <li>
              <p>See Us in the Wild</p>
            </li>
            <li>
              <img src={yelp} className="socialImage"/>
            </li>
            <li>
              <img src={instagram} className="socialImage"/>
            </li>
            <li>
              <img src={podcast} className="socialImage"/>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
