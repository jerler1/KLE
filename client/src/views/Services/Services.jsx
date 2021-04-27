import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { servicesImages } from "../../assets/index";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./Services.scss";

const Services = () => {
  return (
    <div className="servicesContainer">
      <PageHeader
        message="Services"
        className="services"
        absoluteURL="Services-Whole"
      />
      <section className="servicesGrid">
        {servicesImages.map((service, index) => {
          return <ServiceCard {...service} key={index}/>;
        })}
      </section>
      <section className="questionsCallContainer"></section>
    </div>
  );
};

export default Services;
