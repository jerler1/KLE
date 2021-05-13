import React from 'react';
import "./PartnerViewCards.scss";

const PartnerViewCards = ({name, image, caption}) => {
    return (
        <div className="partnerWrapper">
          <div className="partnerCard">
            <img src={image} alt="company logo" />
            <div>
              <p>{name}</p>
              <p>{caption}</p>
            </div>
          </div>
        </div>
      );
};

export default PartnerViewCards;