import React from 'react';
import "./GallerySidebar.scss";

const gallerySideBar = ({name, mainPicture, onClick, className}) => {
    return (
        <div className="sidebarProjectWrapper">
          <div className={className} onClick={onClick}>
            <img src={mainPicture} alt="lovely kitchen" />
            <div>
              <p>{name}</p>
              {/* <p>{shortDescription}</p> */}
            </div>
          </div>
        </div>
      );
};

export default gallerySideBar;