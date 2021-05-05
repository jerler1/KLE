import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Project from "../../components/Project/Project";
import gloomyPicture from "../../assets/images/CFA/PortfolioCTA.png";
import { portfolioPictures } from "../../assets/images/Portfolio/index";
import Button from "../../components/Button/Button";
import ImageGallery from "react-image-gallery";
import GallerySidebar from "../../components/GallerySidebar/GallerySidebar";

const Portfolio = () => {
  const [images, setImages] = useState(null);

  const makeOnProjectClick = ({ pictures }) => {
    const arrayOfImages = pictures.map((picture) => {
      return { original: picture.default, thumbnail: picture.default };
    });
    setImages(arrayOfImages);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeGallery = () => {
    setImages(null);
  };

  return (
    <div className="portfolioContainer">
      <PageHeader
        message="Portfolio"
        className="portfolio"
        absoluteURL="Portfolio-Whole"
      />
      <section className={images ? "imageGalleryWrapper" : "projectGrid"}>
        {images ? (
          <div className="imageGallery" >
            <div className="projectColumn">
              {portfolioPictures.map((card, index) => {
                return (
                  <GallerySidebar
                    className="sidebarProject"
                    key={index}
                    {...card}
                    onClick={() => makeOnProjectClick(card)}
                  />
                );
              })}
            </div>
            <div className="imageGalleryDisplay">
              <ImageGallery
                items={images}
                showPlayButton={false}
                showIndex={true}
                showFullscreenButton={false}
              />
            </div>
          </div>
        ) : (
          portfolioPictures.map((card, index) => {
            return (
              <Project
                className="project"
                key={index}
                {...card}
                onClick={() => makeOnProjectClick(card)}
              />
            );
          })
        )}
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
