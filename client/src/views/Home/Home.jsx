import React from "react";
import { pic1, pic2, pic3 } from "../../assets/index";
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
              <span className="boldFont">Kinetic Lighting and Electric</span> has been filling spaces with light
              and enhancing Bay Area homes since 2004. Providing complete
              lighting design systems and installation to illuminate your dreams
              into a reality.
            </p>
            <button>Get a Quote</button>
          </div>
        </aside>
      </section>
      <section className="homeHeroTwo">
        <img
          className="homePictureTwo"
          src={pic2}
          alt="Well Lighted Kitchen."
        />
      </section>
      <section className="homeHeroThree">
        <img
          className="homePictureThree"
          src={pic3}
          alt="Well Lighted Kitchen."
        />
      </section>
    </div>
  );
};

export default Home;
