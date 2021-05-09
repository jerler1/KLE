import React from "react";
import "./PageHeader.scss";

const PageHeader = ({ message, absoluteURL, alignment, gradientAlignment }) => {
  return (
    <section className={`headerImage`}>
      <div className="imageContainer">
        <img
          src={process.env.PUBLIC_URL + `/Header/${absoluteURL}.png`}
          alt="Well Lighted Design Space"
        />
        <div className={gradientAlignment}></div>
      </div>

      <header className={`headerTitle ${alignment}`}>
        <h1>{message}</h1>
      </header>
    </section>
  );
};

export default PageHeader;
