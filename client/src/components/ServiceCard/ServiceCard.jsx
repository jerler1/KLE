import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./ServiceCard.scss";

const ServiceCard = ({ caption, shortDescription, image, text, alt }) => {
  const [isActive, setIsActive] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="serviceContainer">
      <div
        className="service"
        onClick={onClick}
        onMouseEnter={
          isTabletOrMobile
            ? () => false
            : () => {
                setIsActive(true);
              }
        }
        onMouseLeave={
          isTabletOrMobile
            ? () => false
            : () => {
                console.log("click");
                setIsActive(false);
              }
        }
      >
        <img src={image} alt={alt} />
        <div className={isActive ? "fullScreenCaption" : "miniServiceCaption"}>
          <h4>{caption}</h4>
          <div
            className={
              isActive ? "serviceTextContent" : "serviceTextContent hidden"
            }
          >
            <p className="textLineBreak">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
