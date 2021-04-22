import React from "react";
import "./PageHeader.scss";
import {
  contactHeader,
  partnersHeader,
  portfolioHeader,
  servicesHeader,
  whoHeader,
  whyHeader,
} from "../../assets/index";

const PageHeader = ({ message, absoluteURL }) => {
  console.log("AU: ", absoluteURL);
  return (
    <section className={`headerImage`}>
      <div className="imageContainer">
        <img src={process.env.PUBLIC_URL + `/Header/${absoluteURL}.png`} alt="not working" />
        <div className="gradientOverlay"></div>
      </div>

      <header className="headerTitle">
        <h1>{message}</h1>
      </header>
    </section>
  );
};

export default PageHeader;
