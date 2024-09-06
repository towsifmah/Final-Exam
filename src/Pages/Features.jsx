import React from "react";
import FeaturesSection from "../Components/FeaturesSection";
import FeaturesCard from "../Components/FeaturesCard";
import ProviderFeatures from "../Components/ProviderFeatures";
import IntegateFeatures from "../Components/IntegateFeatures";

const Features = () => {
  return (
    <div id="features">
      <FeaturesSection />
      <FeaturesCard />
      <ProviderFeatures />
      <IntegateFeatures />
    </div>
  );
};

export default Features;
