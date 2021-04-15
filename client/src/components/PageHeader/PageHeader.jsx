import React from "react";
import "./PageHeader.scss";
import { pic3 } from "../../assets/index";

const PageHeader = ({ message, url, className }) => {

  // const headerImageStyles = {
  //   backgroundImage: `linear-gradient(to bottom right, transparent 50%, rgba(var(--mainForegroundColor), 0.8) 50%), url(${url});`
  // };

  return (
    <section style={headerImageStyles} className={`headerBackgroundImage ${className}`}>
      <header className="headerTitle">
        <h1>{message}</h1>
      </header>
    </section>
  );
};

export default PageHeader;
