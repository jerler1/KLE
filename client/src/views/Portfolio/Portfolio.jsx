import React from "react";
import "./Portfolio.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Project from "../../components/Project/Project";
import { pic3 } from "../../assets/index";

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <PageHeader message="Portfolio" className="portfolio" />
      <section className="projectGrid">
        {portfolioProjects.map((project) => {
          <Project {...project} />;
        })}
      </section>
      <section></section>
    </div>
  );
};

export default Portfolio;
