import React from "react";
import { useHistory } from "react-router-dom";
import "./Partners.scss";
import { partnerImages, bikeImages } from "../../assets/index";
import PageHeader from "../../components/PageHeader/PageHeader";
import CallForAction from "../../components/CallForAction/CallForAction";
import PartnerViewCards from "../../components/PartnerViewCards/PartnerViewCards";

const Partners = () => {
  let history = useHistory();

  const onClick = () => {
    history.push("/contact-us");
  };

  return (
    <div className="partnersContainer">
      <PageHeader
        message="Our Partners"
        absoluteURL="Partners-Whole"
        alignment="topAligned"
        gradientAlignment="gradientOverlayTopLeft"
      />
      <section className="whoWeWorkWithWrapper">
        <div className="partnersHeader">
          <h4>We work with the best</h4>
        </div>
        <div className="partnersGrid">
          {partnerImages.map((partner, index) => {
            return <PartnerViewCards {...partner} key={index} />;
          })}
        </div>
      </section>
      <section className="bikeFriendsWrapper">
        <div className="partnersHeader">
          <h4>Bike Friends</h4>
        </div>
        <div className="partnersGrid">
        {bikeImages.map((partner, index) => {
            return <PartnerViewCards {...partner} key={index} />;
          })}
        </div>
      </section>
      <CallForAction
        alt="Toasting of drinks."
        message="Looking to partner with us?"
        buttonMessage="Get in Touch"
        pictureSource="partners"
        onClick={onClick}
      />
    </div>
  );
};

export default Partners;
