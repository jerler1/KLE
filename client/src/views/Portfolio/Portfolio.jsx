import React from "react";
import "./Portfolio.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Project from "../../components/Project/Project";
import { portfolioPictures } from "../../assets/images/Portfolio/index";
import { pic3 } from "../../assets/index";

const Portfolio = () => {
  console.log(portfolioPictures);
  return (
    <div className="portfolioContainer">
      <PageHeader message="Portfolio" className="portfolio" />
      <section className="projectGrid">
        <div className="projectContainer">
          <div className="project">
            <img src={pic3} alt="lovely kitchen" />
            <caption>
              <h4>Elizabeth Street</h4>
              <p>Kitchen Remodel</p>
            </caption>
          </div>
        </div>
        <div className="projectContainer">
          <div className="project">
            <img src={pic3} alt="lovely kitchen" />
            <caption>
              <h4>Elizabeth Street</h4>
              <p>Kitchen Remodel</p>
            </caption>
          </div>
        </div>
        <div className="projectContainer">
          <div className="project">
            <img src={pic3} alt="lovely kitchen" />
            <caption>
              <h4>Elizabeth Street</h4>
              <p>Kitchen Remodel</p>
            </caption>
          </div>
        </div>
        <div className="projectContainer">
          <div className="project">
            <img src={pic3} alt="lovely kitchen" />
            <caption>
              <h4>Elizabeth Street</h4>
              <p>Kitchen Remodel</p>
            </caption>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Portfolio;

// import React from "react";
// import "./Portfolio.scss";
// import PageHeader from "../../components/PageHeader/PageHeader";
// import Project from "../../components/Project/Project";
// import { pic3 } from "../../assets/index";

// const Portfolio = () => {
//   return (
//     <div className="portfolioContainer">
//       <PageHeader message="Portfolio" className="portfolio" />
//       <section className="projectGrid">
//         {portfolioProjects.map((project) => {
//           <Project {...project} />;
//         })}
//       </section>
//       <section></section>
//     </div>
//   );
// };

// export default Portfolio;
