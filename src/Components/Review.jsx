import React from "react";
import { FaStar } from "react-icons/fa6";
const allreview = "./src/assets/allreview.png";
const reviewcard = "./src/assets/reviewcardImg.png";
const Review = () => {
  return (
    <div className="bg-[#F4FAFA] my-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 items-center">
          <div>
            <h2 className="font-chivo font-bold text-gray-900 text-4xl pb-4">
              What they are talking about us?
            </h2>
            <p className="font-DM_sans font-normal text-lg text-gray-500">
              testimonials are evidence of customers talking about your product
              or service in their own words. At their best, they are authentic,
              descriptive.
            </p>
            <button className="px-6 py-2 bg-[#3639A4] text-white font-DM_sans font-medium rounded mt-3">
              Get Started
            </button>
            <div className="pt-16">
              <div className="flex items-center gap-x-6">
                <img src={allreview} alt="" />
                <div>
                  <div className="flex flex-wrap items-center gap-x-5">
                    <h2 className="font-chivo text-[#52C5B6] font-bold text-2xl">
                      4.5
                    </h2>
                    |
                    <div className="flex items-center text-[#efc907] gap-x-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <p className="font-DM_sans text-lg font-medium text-gray-500">
                    280k Total Review
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={reviewcard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
