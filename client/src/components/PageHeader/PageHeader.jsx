import React from "react";
import "./PageHeader.scss";
import { contactHeader, partnersHeader, portfolioHeader, servicesHeader, whoHeader, whyHeader } from "../../assets/index";

const PageHeader = ({ message, className }) => {
  return (
    <section className={`headerBackgroundImage ${className}`}>
      <header className="headerTitle">
        <h1>{message}</h1>
      </header>
    </section>
  );
};

export default PageHeader;
