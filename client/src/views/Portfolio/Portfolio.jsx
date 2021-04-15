import React from "react";
import "./Portfolio.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import { pic3 } from "../../assets/index";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <PageHeader message="Portfolio" className="portfolio" />
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
