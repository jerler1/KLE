import React from "react";
import "./Project.scss";

const Project = ({name, mainPicture, onClick, className}) => {
  return (
    <div className="projectContainer">
      <div className={className} onClick={onClick}>
        <img src={mainPicture} alt="lovely kitchen" />
        <div>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Project;
