import React from "react";
import { useHistory } from "react-router-dom";
import "./WhoWeAre.scss";
import { isabellaPicture } from "../../assets/index";
import PageHeader from "../../components/PageHeader/PageHeader";
import CallForAction from "../../components/CallForAction/CallForAction";

const WhoWeAre = () => {
  let history = useHistory();

  const onClick = () => {
    history.push("/contact-us");
  };

  return (
    <div className="whoWeAreContainer">
      <PageHeader
        message="Who We Are"
        absoluteURL="WhoWeAre-Whole"
        alignment="topAligned"
        gradientAlignment="gradientOverlayTopLeft"
      />
      <section className="meetTheBossWrapper">
        <div className="meetImage">
          <img src={isabellaPicture} alt="Picture of the boss. Isabella." />
        </div>
        <div className="meetTheBossTextWrapper">
          <div className="meetTheBossText">
            <h3>Meet Isabella: the boss</h3>
            <p>
              {`Isabella independently founded Kinetic Lighting and Electric in 2004, and now manages a team of certified electricians, while still remaining closely involved with every project to insure her lighting designs are implemented as envisioned. She is always learning more about design, and keeping on top of the latest trends and technologies so you don’t have to. 
              
              When not busy at work, you can find Isabella exploring backyard trails on Mt. Tam with her mountain bike, or at her lathe expressing her creativity through locally harvested wooden sculptures.`}
            </p>
            <hr />

            <div className="getToKnowPodcastWrapper">
              <div className="getToKnow">
                <h4>Get to know Isabella</h4>
                <p>
                  Hear Isabella discuss disrupting gender norms on The Tim
                  Faller Show.
                </p>
              </div>
              <div className="getToKnowButton">
                <a
                  href="https://thetimfallershow.com/ep-141-breaking-the-gender-barriers-with-isabella-battig/"
                  target="_blank"
                  rel="noreferrer"
                  className="button primaryButton"
                >
                  Listen here
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="questionsCallContainer">
        <div className="serviceQuestionsWrapper">
          <div className="servicesCallToAction">
            <p>
              <span>Our team shines. </span>See how we do it here.
            </p>
          </div>
          <button
            className="button secondaryButton"
            onClick={() => {
              history.push("/services");
            }}
          >
            View Services
          </button>
        </div>
      </section>
      <CallForAction
        alt="Team Meeting"
        message="Interested in joining our team?"
        buttonMessage="Apply Here"
        pictureSource="who"
        onClick={onClick}
      />
    </div>
  );
};

export default WhoWeAre;
