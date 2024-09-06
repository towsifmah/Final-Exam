import React from "react";
const provider = "./src/assets/provider.png";
const group1 = "./src/assets/group1.png";
const group2 = "./src/assets/group2.png";
const group3 = "./src/assets/group3.png";

const smallcard = [
  {
    id: 1,
    image: group1,
    title: "Fast and Easy to use",
    description: "Easily to convert API with just a few clicks",
  },
  {
    id: 2,
    image: group2,
    title: "Safely Security",
    description: "All customer data is encrypted",
  },
  {
    id: 3,
    image: group3,
    title: "Get Organized",
    description: "From lists to boards, organize work your way.",
  },
  // {
  //     id:4,
  //     title:
  // }
];

const ProviderFeatures = () => {
  return (
    <div className="container pt-14 pb-6">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        <div>
          <img className="" src={provider} alt="" />
        </div>
        <div>
          <h3 className="font-chivo font-bold text-gray-900 text-[50px] leading-snug">
            We provide features for your Business
          </h3>
          <div className="grid gap-6 grid-cols-2 mt-5">
            {smallcard.map((allcard) => (
              <div key={allcard.id} className="p-5 flex flex-col items-start">
                <img src={allcard.image} alt="" />
                <div>
                  <h3 className="font-bold font-chivo text-[22px] text-gray-900 py-2">
                    {allcard.title}
                  </h3>
                  <p className="font-DM_sans font-normal text-lg text-gray-500">
                    {allcard.description}
                  </p>
                </div>
              </div>
            ))}
            <button className="w-36 py-2 h-12 bg-[#3639A4] mt-28 ml-12 md:ml-16 rounded text-white font-DM_sans font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderFeatures;
