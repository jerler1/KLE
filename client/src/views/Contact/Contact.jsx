import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
// import { email, phone } from "../../assets/index";
import Icon from "../../components/Icon/Icon";

import "./Contact.scss";

const Contact = () => {
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
            <div className="contactPhoneNumber">
              <Icon name="phoneWhite" alt="phone" width="75" height="50" />
              <p>415.569.7167</p>
            </div>
            <div className="contactEmail">
              <Icon name="emailWhite" alt="email" width="75" height="50" />
              <p>hello@kineticelectricsf.com</p>
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
