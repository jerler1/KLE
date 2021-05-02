import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Project from "../../components/Project/Project";
import gloomyPicture from "../../assets/images/CFA/PortfolioCTA.png";
import { portfolioPictures } from "../../assets/images/Portfolio/index";
import Button from "../../components/Button/Button";
import ImageGallery from "react-image-gallery";

const Portfolio = () => {
  const [images, setImages] = useState(null);
  useEffect(() => {
    console.log("hi hi");
  }, [images]);

  const settingImages = (e) => {
    setImages(portfolioPictures[0].pictures);
    
    console.log("Setting Images");
    console.log(e.currentTarget);
  }

  // boolean for if gallery is being shown
  // -- if false set images to null
  // -- if null display the portfolio cards
  return (
    <div className="portfolioContainer">
      <PageHeader
        message="Portfolio"
        className="portfolio"
        absoluteURL="Portfolio-Whole"
      />
      <section className={images ? "imageGallery" :"projectGrid"}>
        {images ? <ImageGallery images={images}/> : portfolioPictures.map((project, index) => {
          return <Project key={index} {...project} settingImages={settingImages} />;
        })}
      </section>
      <section className="contactCFAContainer">
        <div className="gloomyPicture">
          <img src={gloomyPicture} alt="gloomy kitchen" />
        </div>
        <div className="cfaTextWrapper">
          <div className="cfaText">
            <p>Ready to make your space beautiful?</p>
            {/* todo: link button */}
            <Button className="button primaryButton">Get in Touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
