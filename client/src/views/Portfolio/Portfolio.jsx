import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Project from "../../components/Project/Project";
import CallForAction from "../../components/CallForAction/CallForAction";
import { portfolioPictures } from "../../assets/images/Portfolio/index";
import ImageGallery from "react-image-gallery";
import { useHistory } from "react-router-dom";
import { arrowDown } from "../../assets/index";
import GallerySidebar from "../../components/GallerySidebar/GallerySidebar";

const Portfolio = () => {
  const [images, setImages] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  let history = useHistory();

  const makeOnProjectClick = ({ pictures, name }) => {
    const arrayOfImages = pictures.map((picture) => {
      return { original: picture.default, thumbnail: picture.default };
    });
    setImages(arrayOfImages);
    setActiveProject(name);
  };

  const closeGallery = () => {
    setImages(null);
    setActiveProject(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClick = () => {
    history.push("/contact-us");
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
          <div className="imageGallery">
            <div className="displayedProjectName">
              <button onClick={closeGallery}>
                <img src={arrowDown} alt="arrow pointing left" />
              </button>
              <h4>{activeProject}</h4>
            </div>
            <div className="imageGalleryContent">
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
      <CallForAction
        alt="Gloomy Kitchen"
        message="Ready to make your space beautiful?"
        buttonMessage="Get in Touch"
        pictureSource="portfolio"
        onClick={onClick}
      />
    </div>
  );
};

export default Portfolio;
