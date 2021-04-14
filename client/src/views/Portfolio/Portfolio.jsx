import React from "react";
import "./Portfolio.scss";
// import PageHeader from "../../components/PageHeader/PageHeader";
import { pic3 } from "../../assets/index";
import croppedHeader from "../../assets/images/Portfolio/Portfolio-Cropped.png"

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <section className="headerBackgroundImage">
        {/* <img className="headerBackgroundImage" src={croppedHeader} alt="kitchen well lighted"/> */}
        <header className="headerTitle">
          <h1>Portfolio</h1>
        </header>
      </section>
      {/* <PageHeader message="Portfolio" url={"pic3"} /> */}
      <section className="projectGrid">
        <div className="project">
          <caption>
            <h4>Elizabeth Street</h4>
            <p>Kitchen Remodel</p>
          </caption>
        </div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
      </section>
      <section></section>
    </div>
  );
};

export default Portfolio;
