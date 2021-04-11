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
                <span className="kineticExperienceIcon">
                  <Icon name="chatbubbles" alt="chat bubbles" />
                </span>
                <p className="bannerLeftAligned">Communication</p>
              </div>
              <div className="kineticExperienceValues">
                <span className="kineticExperienceIcon">
                  <Icon name="construct" alt="wrenches" />
                </span>
                <p className="bannerLeftAligned">Integrity</p>
              </div>
              <div className="kineticExperienceValues">
                <span className="kineticExperienceIcon">
                  <Icon name="clock" alt="clock" />
                </span>
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
          <h4 className="bannerHeader">
            <span>
              <Icon name="bulb" alt="lightbulb" />
            </span>
            <header>What We Do</header>
          </h4>
          <div className="lightBulbBannerThree">
            <svg
              width="146"
              height="226"
              viewBox="0 0 146 226"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.0003 177V113M97.0003 177V165C97.0003 150.5 112.77 136.785 123 127C137.42 113.215 145 94.6953 145 73.0003C145 33.0003 113.135 1.00028 73.0003 1.00028C63.5377 0.973884 54.1632 2.8182 45.4159 6.42719C36.6685 10.0362 28.7208 15.3387 22.0297 22.0297C15.3387 28.7208 10.0362 36.6685 6.42719 45.4159C2.8182 54.1632 0.973884 63.5377 1.00028 73.0003C1.00028 93.9203 8.90528 113.695 23.0003 127C33.1753 136.605 49.0003 150.35 49.0003 165V177H97.0003ZM57.0003 225H89.0003H57.0003ZM49.0003 201H97.0003H49.0003Z"
                stroke="#FEFAFA"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <Button className="button secondaryButton">View Portfolio</Button>
          <Button className="button primaryButton">See Services</Button>
        </aside>
      </section>
    </div>
  );
};

export default Home;
