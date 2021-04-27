import React, { useState } from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ caption, shortDescription, image, text, alt }) => {
  const [isActive, setIsActive] = useState(false);

  const onClick = (e) => {
    setIsActive(!isActive);
  };

  return (
    <div className="serviceContainer">
      <div className="service" onClick={onClick}>
        <img src={image} alt={alt} />
        <caption
          className={isActive ? "fullScreenCaption" : "miniServiceCaption"}
        >
          <h4>{caption}</h4>
          <div
            className={
              isActive ? "serviceTextContent" : "serviceTextContent hidden"
            }
          >
            <p>{text}</p>
          </div>
        </caption>
      </div>
    </div>
  );
};

export default ServiceCard;
