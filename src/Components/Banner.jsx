import React from "react";
const laptop = "./src/assets/laptopscreens.png";
const Banner = () => {
  return (
    <div className="bg-banner relative bg-center object-cover bg-no-repeat ">
      <div className="flex flex-col pt-[196px] text-center items-center justify-center mx-auto">
        <h1 className="md:text-[56px] text-4xl leading-snug font-chivo font-bold text-white md:w-[670px] ">
          Get your work done with Management Tool
        </h1>
        <p className="text-lg w-[467px] font-DM_sans font-normal text-white">
          The world's first project management platform that connects everything
        </p>
        <div className="relative mt-4 pb-[560px]">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your business email"
            className="w-full p-5 pr-[150px]  rounded bg-gray-100 font-DM_sans font-medium placeholder:font-DM_sans placeholder:font-medium outline-none text-black"
          />
          <div>
            <button className="py-3 px-3 md:px-6 bg-[#43E7DF] absolute top-2 right-2 rounded font-DM_sans text-gray-900 font-normal text-base">
              Try for Free
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-[680px] md:top-[550px] right-3 md:right-36">
        <img className="" src={laptop} alt="" />
      </div>
    </div>
  );
};

export default Banner;
