import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({name, shortDescription, mainPicture, mainText}) => {
  return (
    <div className="projectContainer">
      <div className="project">
        <img src={mainPicture} alt="lovely kitchen" />
        <caption>
          <h4>{name}</h4>
          <p>{shortDescription}</p>
        </caption>
        <div className="activatedService">
            <h4>{name}</h4>
            <p>{mainText}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;