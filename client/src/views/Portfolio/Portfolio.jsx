import React from "react";
import "./Portfolio.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Project from "../../components/Project/Project";
import gloomyPicture from "../../assets/images/CFA/PortfolioCTA.png";
import { portfolioPictures } from "../../assets/images/Portfolio/index";
import Button from "../../components/Button/Button";


const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <PageHeader message="Portfolio" className="portfolio" />
      <section className="projectGrid">
        {portfolioPictures.map((project) => {
          return <Project {...project} />;
        })}
      </section>
      <section className="contactCFAContainer">
        <div className="gloomyPicture">
          <img src={gloomyPicture} alt="gloomy kitchen"/>
        </div>
        <div className="cfaTextWrapper">
          <div className="cfaText">
            <p>Ready to make your space beautiful?</p>
            {/* todo: link button */}
            <Button className="button primaryButton">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
