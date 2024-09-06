import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGoogle, FaTwitter } from "react-icons/fa6";
const logo = "./src/assets/footerlogo.png";
import { FaTelegramPlane } from "react-icons/fa";

const product = [
  {
    id: 1,
    title: "Product",
    link1: "Landingpages",
    link2: "Pricing",
    link3: "Benefits",
    link4: "Features",
  },
];

const company = [
  {
    id: 2,
    title: "Company",
    link1: "About",
    link2: "Privacy Policy",
    link3: "Terms & Conditions",
    link4: "Partners",
    link5: "Contact",
  },
];

const resourse = [
  {
    id: 3,
    title: "Resources",
    link1: "Guides and resources",
    link2: "Blog",
    link3: "Tools",
    link4: "Support",
  },
];

const Footer = () => {
  return (
    <div className="pt-16">
      <div className="container px-16 pb-20">
        <div className="bg-footerimg bg-center bg-no-repeat rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 p-10 items-center">
            <div>
              <h2 className="font-chivo font-bold text-[40px] leading-snug text-white">
                Don’t find the answer? contact us for any query.
              </h2>
            </div>
            <div>
              <button className="py-2 px-6 bg-[#43E7DF] rounded text-gray-900 ml-0 md:ml-56 font-DM_sans font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-14">
        <div className="flex flex-col md:flex-row gap-x-24">
          <div>
            <img src={logo} alt="" />
            <h2 className="font-DM_sans font-normal text-base text-gray-500 w-60 py-4">
              Build a modern and creative website with Innovate.
            </h2>
            <div className="flex flex-wrap items-center gap-x-2">
              <FaGoogle className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 duration-300 p-2" />
              <FaTwitter className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 duration-300 p-2" />
              <FaInstagram className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 duration-300 p-2" />
              <FaLinkedin className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 duration-300 p-2" />
            </div>
          </div>
          {product.map((products) => (
            <div key={products.id}>
              <h4 className="font-DM_sans font-medium text-lg text-gray-900 mb-3">
                {products.title}
              </h4>
              <div className="font-DM_sans text-base font-normal text-gray-500 flex flex-col gap-y-2">
                <p>{products.link1}</p>
                <p>{products.link2}</p>
                <p>{products.link3}</p>
                <p>{products.link4}</p>
              </div>
            </div>
          ))}
          {company.map((companys) => (
            <div key={companys.id}>
              <h4 className="font-DM_sans font-medium text-lg text-gray-900 mb-3">
                {companys.title}
              </h4>
              <div className="font-DM_sans text-base font-normal text-gray-500 flex flex-col gap-y-2">
                <p>{companys.link1}</p>
                <p>{companys.link2}</p>
                <p>{companys.link3}</p>
                <p>{companys.link4}</p>
                <p>{companys.link5}</p>
              </div>
            </div>
          ))}
          {resourse.map((resur) => (
            <div key={resur.id}>
              <h4 className="font-DM_sans font-medium text-lg text-gray-900 mb-3">
                {resur.title}
              </h4>
              <div className="font-DM_sans text-base font-normal text-gray-500 flex flex-col gap-y-2">
                <p>{resur.link1}</p>
                <p>{resur.link2}</p>
                <p>{resur.link3}</p>
                <p>{resur.link4}</p>
              </div>
            </div>
          ))}

          <div>
            <h3 className="font-DM_sans font-medium text-lg text-gray-900 mb-3">
              Get Latest Updates
            </h3>
            <p className="font-DM_sans text-sm font-normal text-gray-500 mb-2">
              Subscribe to our newsletter and get many interesting things every
              week
            </p>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                className="w-full p-2 pr-12 outline-none border rounded font-DM_sans font-medium placeholder:font-DM_sans placeholder:font-medium placeholder:text-sm"
              />
              <button className="py-2 px-3 rounded-md bg-[#3639A4] translate-x-[23.3rem]  md:translate-x-[12.2rem] translate-y-[-2.4rem]">
                <FaTelegramPlane className="text-lg text-gray-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="border-t py-4">
          <h3 className="font-DM_sans text-lg font-medium text-gray-500">
            &copy; 2024 Innovate - All Right Reserved
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
