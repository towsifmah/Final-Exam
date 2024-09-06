import React from "react";
const tick = "./src/assets/tick.png";
const pricing1 = "./src/assets/pricing1.png";
const pricing2 = "./src/assets/pricing2.png";
const pricing3 = "./src/assets/pricing3.png";

const pricingcard = [
  {
    id: 1,
    image: pricing1,
    title: "Personal",
    price: "$10/mth",
    pricingdescrib: "Annual pricing (save 20%)",
    pricingruls: (
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Data export & deletion</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Block native integrations</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Custom branding</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Lock custom fields</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Priority support</p>
        </div>
      </div>
    ),
    button: "Purchase Now",
  },
  {
    id: 2,
    image: pricing2,
    title: "Team",
    price: "$25/mth",
    pricingdescrib: "Annual pricing (save 35%)",
    pricingruls: (
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Timeline Review</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Custom fields</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Custom Templates</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Task dependencies</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Milestones Manage</p>
        </div>
      </div>
    ),
    button: "Purchase Now",
  },
  {
    id: 3,
    image: pricing3,
    title: "Enterprise",
    price: "$50/mth",
    pricingdescrib: "Annual pricing (save 40%)",
    pricingruls: (
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Timeline Review</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Custom fields</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Custom Templates</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Task dependencies</p>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="w-[18px]" src={tick} alt="" />
          <p>Milestones Manage</p>
        </div>
      </div>
    ),
    button: "Purchase Now",
  },
];

const Pricing = () => {
  return (
    <div className="container px-16 py-8">
      <div>
        <h2 className="md:w-[624px] font-chivo font-bold md:text-[46px] leading-snug text-center mx-auto pt-10">
          Pricing Designed To Fit Your Business
        </h2>
        <div className="flex items-center justify-center gap-x-3 pt-4 pb-7 cursor-pointer">
          <p className="text-lg font-chivo font-bold text-gray-900 hover:text-[#3639A4] duration-200">
            Monthly
          </p>
          <div className="w-14 h-6 bg-[#3639A4] rounded-full relative">
            <div className="w-5 h-5 rounded-full bg-white absolute top-[2px] bottom-0 left-1"></div>
          </div>
          <p className="text-lg font-chivo font-bold text-gray-900 hover:text-[#3639A4] duration-200">
            Yearly
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-5">
          {pricingcard.map((cards) => (
            <div key={cards.id} className="group">
              <div className="bg-white group-hover:bg-[#3639A4] p-2 md:p-8 shadow-md rounded border border-[#363aa467] duration-300">
                <div className="flex flex-col items-center justify-center text-center">
                  <img className="w-16" src={cards.image} alt="" />
                  <h5 className="font-chivo text-lg font-bold text-[#3639A4] py-2 group-hover:text-[#43E7DF]">
                    {cards.title}
                  </h5>
                  <h2 className="font-chivo md:text-5xl font-bold text-black pb-2 group-hover:text-white">
                    {cards.price}
                  </h2>
                  <p className="font-DM_sans font-medium text-lg text-gray-800 pb-5 group-hover:text-white">
                    {cards.pricingdescrib}
                  </p>
                </div>
                <div>
                  <p className="text-base font-medium text-[#645E76] group-hover:text-white pb-8">
                    {cards.pricingruls}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="py-3 md:px-20 bg-[#2629A4] text-white rounded font-DM_sans font-medium hover:bg-[#43E7DF] hover:text-[#363aa4eb] duration-300">
                    {cards.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
