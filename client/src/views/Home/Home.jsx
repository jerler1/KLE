import React from "react";
import { pic1, pic2, pic3 } from "../../assets/index";
import "./Home.scss";

const Home = () => {
  return <div className="homeContainer">
    <section className="homeHero">
      <img className="homePictureOne" src={pic1} alt="Well Lighted Kitchen."/>
    </section>
    <section className="homeHeroTwo">
      <img className="homePictureTwo" src={pic2} alt="Well Lighted Kitchen."/>
    </section>
    <section className="homeHeroThree">
  <img className="homePictureThree" src={pic3} alt="Well Lighted Kitchen."/>
    </section>
  </div>;
};

export default Home;
