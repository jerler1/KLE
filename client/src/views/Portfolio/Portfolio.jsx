import React from "react";
import "./Portfolio.scss";
// import PageHeader from "../../components/PageHeader/PageHeader";
import { pic3 } from "../../assets/index";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <section className="headerBackgroundImage">
        {/* <img src={pic3} alt="kitchen well lighted"/> */}
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
