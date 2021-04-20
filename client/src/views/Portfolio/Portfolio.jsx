import React from "react";
import "./Portfolio.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Project from "../../components/Project/Project";
import { portfolioPictures } from "../../assets/images/Portfolio/index";


const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <PageHeader message="Portfolio" className="portfolio" />
      <section className="projectGrid">
        {portfolioPictures.map((project) => {
          return <Project {...project} />;
        })}
      </section>
      <section></section>
    </div>
  );
};

export default Portfolio;
