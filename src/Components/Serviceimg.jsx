import React from "react";
const vectors = "./src/assets/vectors.png";

const countall = [
  {
    id: 1,
    count: "720+",
    description: "Over 500 business powered with us",
  },
  {
    id: 2,
    count: "4.9",
    description: "Rating on google play and app store",
  },
  {
    id: 3,
    count: "200+",
    description: "Easily integrate with your favorite apps",
  },
];
const Serviceimg = () => {
  return (
    <div className="md:container md:px-20">
      <div className="bg-serviceImg bg-center bg-no-repeat rounded-xl my-8">
        <div className="md:pt-20 md:pl-12 md:pr-6 grid grid-cols-1 gap-1 md:grid-cols-2">
          <div>
            <img className="w-full md:w-[800px] rounded" src={vectors} alt="" />
          </div>
          <div>
            <h3 className="font-chivo text-[38px] leading-snug font-bold text-white md:pb-10">
              Trusted by 35,000+ happy customers.
            </h3>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3">
                {countall.map((all) => (
                  <div key={all.id} className="p-4">
                    <h3 className="font-chivo text-[44px] font-bold text-white">
                      {all.count}
                    </h3>
                    <p className="font-DM_sans font-medium text-sm text-white">
                      {all.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviceimg;
