import React from "react";
const icon1 = "./src/assets/scor1.png";
const arrow1 = "./src/assets/arrow1.png";
const icon2 = "./src/assets/scor2.png";
const arrow2 = "./src/assets/arrow2.png";
const icon3 = "./src/assets/scor3.png";

const FeaturesItems = [
  {
    id: 1,
    image: icon1,
    title: "Login or sign up to be able use our platform",
    description:
      "This quickstart shows you how to use Identity Platform to sign in a user with an email and password. ",
  },
  {
    id: 2,
    image: icon2,
    title: "Connect your website with just a few click",
    description:
      "Once your website is online, you can configure it, I will show you how to put your website online",
  },

  {
    id: 3,
    image: icon3,
    title: "Take some sales data that you want",
    description:
      "Sell your data directly: The most straightforward method is to sell your data directly to another",
  },
];

const FeaturesCard = () => {
  return (
    <div className="container">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {FeaturesItems.map((allitems) => (
          <div
            key={allitems.id}
            className="p-8 bg-white flex items-center justify-center flex-col text-center"
          >
            <div className="w-14">
              <img src={allitems.image} alt="" />
            </div>
            <h3 className="font-chivo font-bold text-2xl text-gray-900 py-2">
              {allitems.title}
            </h3>
            <p className="font-DM_sans text-lg font-normal text-[#645E76]">
              {allitems.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCard;
