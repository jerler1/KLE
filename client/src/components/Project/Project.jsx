import React from "react";
import "./Project.scss";

const Project = ({name, shortDescription, mainPicture}) => {
  return (
    <div className="projectContainer">
      <div className="project">
        <img src={mainPicture} alt="lovely kitchen" />
        <caption>
          <h4>{name}</h4>
          <p>{shortDescription}</p>
        </caption>
      </div>
    </div>
  );
};

export default Project;
