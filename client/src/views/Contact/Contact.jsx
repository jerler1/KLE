import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "../../components/Button/Button";
import { email, phone } from "../../assets/index";
import Icon from "../../components/Icon/Icon";
import { useMediaQuery } from "react-responsive";

import "./Contact.scss";

const Contact = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className="contactContainer">
      <PageHeader message="Contact Us" absoluteURL="Contact-Whole" />
      <section className="contactSection">
        <div className="contactInformationWrapper">
          <div className="contactInformationContent">
            <p>
              Kinetic Lighting and Electric is based in Mill Valley, CA and
              works in Marin, SF and the East Bay.
            </p>
            <div className="contactMobileBackground">
              <div className="contactPhoneNumber">
                <div
                  className={
                    !isTabletOrMobile ? "desktopPhone" : "inactive absolute"
                  }
                >
                  <Icon name="phoneWhite" alt="phone" width="75" height="50" />
                  <p>415.569.7167</p>
                </div>
                <div
                  className={
                    isTabletOrMobile ? "mobilePhone" : "inactive absolute"
                  }
                >
                  <a className="button secondaryButton" href="tel:415-569-7167" aria-label="Phone Link">
                    <span>
                      <img src={phone} alt="phone" />
                    </span>
                    Call Us
                  </a>
                  <p>415.569.7167</p>
                </div>
              </div>
              <div className="contactEmail">
                <div
                  className={
                    !isTabletOrMobile ? "desktopEmail" : "inactive absolute"
                  }
                >
                  <Icon name="emailWhite" alt="email" width="75" height="50" />
                  <p>hello@kineticelectricsf.com</p>
                </div>
                <div
                  className={
                    isTabletOrMobile ? "mobileEmail" : "inactive absolute"
                  }
                >
                  <a className="button secondaryButton" href="mailto:hello@kineticelectricsf.com" aria-label="Email Link">
                    <span>
                      <img src={email} alt="email" />
                    </span>
                    Email Us
                  </a>
                  <p>hello@kineticelectricsf.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactFormWrapper">
          <div className="contactFormContent">
            <h3>Send us a message</h3>
            <form className="contactForm">
              <div className="emailInputWrapper">
                <label className="label">Email</label>
                <input className="input" type="text" name="email" />
              </div>
              <div className="phoneInputWrapper">
                <label className="label">Phone</label>
                <input className="input" type="text" name="phone" />
              </div>
              <div className="timeInputWrapper">
                <label className="label">Best time to contact you</label>
                <input className="input" type="text" name="time" />
              </div>
              <div className="messageInputWrapper">
                <label className="label">Your Message</label>
                <textarea className="input" type="text" name="message" />
              </div>
              <div className="buttonWrapper">
                <button className="button primaryButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
