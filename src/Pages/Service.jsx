import React from "react";
import ServiceCard from "../Components/ServiceCard";
import Serviceimg from "../Components/Serviceimg";
import Pricing from "../Components/Pricing";
import Review from "../Components/Review";

const Service = () => {
  return (
    <div>
      <ServiceCard />
      <Serviceimg />
      <Pricing />
      <Review />
    </div>
  );
};

export default Service;
