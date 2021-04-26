import React, { useState } from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ caption, shortDescription, image, text, alt }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="serviceContainer">
      <div className="service">
        <img src={image} alt={alt} />
        <caption className="miniServiceCaption">
          <h4>{caption}</h4>
          <p>{shortDescription}</p>
        </caption>
        <caption className="fullServiceCaption">
          <h4>{caption}</h4>
          <div className="serviceTextContent">
            <p>{text}</p>
          </div>
        </caption>
      </div>
    </div>
  );
};

export default ServiceCard;
