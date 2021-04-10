import React from "react";
import { pic1, pic2, pic3 } from "../../assets/index";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import "./Home.scss";

const Home = () => {
  return (
    <div className="homeContainer">
      <section className="homeHero">
        <img
          className="homePictureOne"
          src={pic1}
          alt="Well Lighted Kitchen."
        />
        <aside className="homePictureOneBanner">
          <div className="homePictureOneContent">
            <h2 className="headline1">The dark ages are over.</h2>
            <h3>We bring the light.</h3>
            <p className="homePictureOneBlurb">
              <span className="boldFont">Kinetic Lighting and Electric</span>{" "}
              has been filling spaces with light and enhancing Bay Area homes
              since 2004. Providing complete lighting design systems and
              installation to illuminate your dreams into a reality.
            </p>
            <Button className="button primaryButton">Get a Quote</Button>
          </div>
        </aside>
      </section>
      <section className="homeHeroTwo">
        <img
          className="homePictureTwo"
          src={pic2}
          alt="Well Lighted Kitchen."
        />
        <aside className="homePictureTwoBanner">
          <div className="bannerTwoContent">
            <h4 className="bannerHeader">The Kinetic Experience</h4>
            <div className="bannerLeftAligned">
              <div className="kineticExperienceValues">
                <span className="kineticExperienceIcon"><Icon name="chatbubbles"/></span>
                <p className="bannerLeftAligned">Communication</p>
              </div>
              <div className="kineticExperienceValues">
                <span className="kineticExperienceIcon"><Icon name="construct"/></span>
                <p className="bannerLeftAligned">Integrity</p>
              </div>
              <div className="kineticExperienceValues">
                <span className="kineticExperienceIcon"><Icon name="clock"/></span>
                <p className="bannerLeftAligned">Accountability</p>
              </div>
            </div>
            <Button className="button secondaryButton">Learn More</Button>
          </div>
        </aside>
      </section>
      <section className="homeHeroThree">
        <img
          className="homePictureThree"
          src={pic3}
          alt="Well Lighted Kitchen."
        />
        <aside className="homePictureThreeBanner">
          <h4 className="bannerHeader">What We Do</h4>
          <Icon name="bulb" width="100px"/>
          <Button className="button secondaryButton">View Portfolio</Button>
          <Button className="button primaryButton">See Services</Button>
        </aside>
      </section>
    </div>
  );
};

export default Home;
