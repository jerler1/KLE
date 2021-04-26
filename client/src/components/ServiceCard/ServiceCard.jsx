import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({caption, shortDescription, image, text, alt}) => {
  return (
    <div className="serviceContainer">
      <div className="service">
        <img src={image} alt={alt} />
        <caption>
          <h4>{caption}</h4>
          <p>{shortDescription}</p>
        </caption>
        <div className="activatedService">
            <h4>{caption}</h4>
            <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;