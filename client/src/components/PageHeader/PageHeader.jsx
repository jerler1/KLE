import React from "react";
import "./PageHeader.scss";

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
