import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./Services.scss";

const Services = () => {
  return (
    <div className="servicesContainer">
      <PageHeader message="Services" className="portfolio" />
      <section className="servicesGrid"></section>
      <section className="questionsCallContainer"></section>
    </div>
  );
};

export default Services;
