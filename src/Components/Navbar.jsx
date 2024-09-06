import React, { useState } from "react";
import { Link } from "react-router-dom";
const logo = "./src/assets/Logo.png";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <div className="fixed bg-[#363aa4a4] backdrop-blur-md top-0 right-0 left-0 z-50">
      <div className="container px-4 py-4 text-gray-200">
        {/* md-UP */}
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="hidden md:flex items-center font-DM_sans font-medium gap-x-48">
            <div className="flex items-center gap-x-10 ">
              <div className="flex items-center gap-2 cursor-pointer">
                <Link to="#">Home</Link>
                <FaChevronDown className="text-sm mt-1" />
              </div>
              <div className="cursor-pointer">
                <Link to="#features">Features</Link>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <Link to="/">Service</Link>
                <FaChevronDown className="text-sm mt-1" />
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <Link to="/">Pages</Link>
                <FaChevronDown className="text-sm mt-1" />
              </div>
              <div className="cursor-pointer">
                <Link to="/">Blog</Link>
              </div>
            </div>
            <div className="flex items-center gap-x-5 font-DM_sans font-medium">
              <button>Login</button>
              <button className="py-2 px-5 bg-[#43E7DF] text-gray-800 rounded font-medium">
                Register
              </button>
            </div>
          </div>
          {/* md-down */}

          <div className="md:hidden text-white text-2xl">
            <button onClick={() => setMenuBar(!menuBar)}>
              {!menuBar ? <FaBars /> : <IoClose />}
            </button>
          </div>
        </div>
      </div>
      {menuBar && (
        <div className="md:hidden flex flex-col p-8 items-center font-DM_sans font-medium gap-y-7 bg-[#0066ff72] backdrop-blur-sm">
          <div className="md:flex items-center space-y-5 ">
            <div className="flex items-center gap-2 cursor-pointer">
              <Link to="/">Home</Link>
              <FaChevronDown className="text-sm mt-1" />
            </div>
            <div className="cursor-pointer">
              <Link to="/features">Features</Link>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Link to="/">Service</Link>
              <FaChevronDown className="text-sm mt-1" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Link to="/">Pages</Link>
              <FaChevronDown className="text-sm mt-1" />
            </div>
            <div className="cursor-pointer">
              <Link to="/">Blog</Link>
            </div>
          </div>
          <div className="flex items-center gap-x-5 font-DM_sans font-medium">
            <button>Login</button>
            <button className="py-2 px-5 bg-[#43E7DF] text-gray-800 rounded font-medium">
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
