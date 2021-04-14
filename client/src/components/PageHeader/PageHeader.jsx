import React from "react";
import "./PageHeader.scss";
import { pic3 } from "../../assets/index";

const PageHeader = ({ message, url }) => {
    const image = require(`../../assets/images/pic3-SanAnselmo.png`);
  const headerImageStyles = {
    backgroundImage: `linear-gradient(to bottom right, transparent 50%, rgba(var(--mainForegroundColor), 0.8) 50%), url(${image});`
  };

  return (
    <section style={headerImageStyles} className="headerBackgroundImage">
      <header className="headerTitle">
        <h1>{message}</h1>
      </header>
    </section>
  );
};

export default PageHeader;
