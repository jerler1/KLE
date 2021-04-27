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
          return <ServiceCard {...service} key={index} />;
        })}
      </section>
      <section className="questionsCallContainer">
        <div className="serviceQuestionsWrapper">
          <div className="servicesCallToAction">
            <h3>Questions?</h3>
            <p>
              If you don’t see what you’re looking for, you’re unsure what you
              need, or you have any other questions, please don’t hesitate to
              reach out.
            </p>
          </div>
          <button className="button primaryButton">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
