import React from "react";
import "./PageHeader.scss";

const PageHeader = ({ message, absoluteURL }) => {
  return (
    <section className={`headerImage`}>
      <div className="imageContainer">
        <img
          src={process.env.PUBLIC_URL + `/Header/${absoluteURL}.png`}
          alt="Well Lighted Design Space"
        />
        <div className="gradientOverlay"></div>
      </div>

      <header className="headerTitle">
        <h1>{message}</h1>
      </header>
    </section>
  );
};

export default PageHeader;
