import React from "react";
const service1 = "./src/assets/service1.png";
const service2 = "./src/assets/service2.png";
const service3 = "./src/assets/service.3.png";
const service4 = "./src/assets/service4.png";
import { FaArrowRightLong } from "react-icons/fa6";

const cardItems = [
  {
    id: 1,
    image: service1,
    title: "Plan Product Roadmap",
    description:
      "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
    button: (
      <div className="flex items-center gap-x-1">
        <p>Read More</p>
        <FaArrowRightLong />
      </div>
    ),
  },
  {
    id: 2,
    image: service2,
    title: "Assign Any Work",
    description:
      "Work assignment or job assignment is allocating work to work centers or appropriate",
    button: (
      <div className="flex items-center gap-x-1">
        <p>Read More</p>
        <FaArrowRightLong />
      </div>
    ),
  },
  {
    id: 3,
    image: service3,
    title: "Monitor Work Progress",
    description:
      "Monitor Work ProgressKeeping records and monitoring activities helps people see progress",
    button: (
      <div className="flex items-center gap-x-1">
        <p>Read More</p>
        <FaArrowRightLong />
      </div>
    ),
  },
  {
    id: 4,
    image: service4,
    title: "Pertect Intergration",
    description:
      "App integration, in a general sense, is the process of resources or capabilities from one application",
    button: (
      <div className="flex items-center gap-x-1 ">
        <p>Read More</p>
        <FaArrowRightLong />
      </div>
    ),
  },
];

const ServiceCard = () => {
  return (
    <div className="container px-16">
      <div className="text-center">
        <h4 className="font-DM_sans font-medium text-lg text-[#FF7364] mb-2">
          Our Services
        </h4>
        <h2 className="font-chivo font-bold text-5xl text-gray-900">
          How it Works
        </h2>
      </div>
      <div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 py-12">
          {cardItems.map((allcard) => (
            <div
              key={allcard.id}
              className="p-4 rounded-md border bg-white border-[#3639A4] shadow-lg duration-300 hover:scale-105 hover:bg-[#3639A4] text-gray-900 hover:text-white group"
            >
              <div>
                <img className="w-16" src={allcard.image} alt="" />
              </div>
              <h3 className="font-chivo font-bold text-lg py-2">
                {allcard.title}
              </h3>
              <p className="font-DM_sans font-normal text-[14px] text-gray-500 group-hover:text-white">
                {allcard.description}
              </p>
              <button className="font-DM_sans font-medium text-[#3639A4] group-hover:text-white py-2">
                {allcard.button}
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button className="py-2 px-5 border border-[#3639A4] text-[#3639A4] rounded font-DM_sans font-medium mb-11">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
