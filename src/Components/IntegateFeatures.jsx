import React from "react";
const brand = "./src/assets/brand.png";
const IntegateFeatures = () => {
  return (
    <div className="bg-featuresint bg-center bg-no-repeat">
      <div className="container mx-auto">
        <div className="grid gap-x-8 grid-cols-1  md:grid-cols-2 px-5 py-[240px] items-center">
          <div>
            <h5 className="font-DM_sans font-medium text-xl text-[#FF7364] pb-2">
              Integrations
            </h5>
            <h2 className="font-chivo font-bold text-gray-900 text-4xl pb-4">
              Easily integrate with your favorite apps
            </h2>
            <p className="font-DM_sans font-normal text-lg text-gray-500">
              App integration, in a general sense, is the process of bringing
              resources or capabilities from one application to another. As the
              world of apps continues to evolve, app integration is becoming
              expected in many contexts.
            </p>
            <button className="px-6 py-2 bg-[#3639A4] text-white font-DM_sans font-medium rounded mt-3">
              Get Started
            </button>
          </div>
          <div className=" ">
            <img src={brand} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegateFeatures;
