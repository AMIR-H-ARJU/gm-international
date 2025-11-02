import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/pictures/Frame 3.png'
import hotline from "../../assets/pictures/Group 123.png"
import login from "../../assets/pictures/Frame 28.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md h-15 fixe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ">
        <div className="flex justify-between h-16 items-center ">
          
          {/* Left: Logo */}
          <div className="flex items-center">
           <NavLink>
            <img src={logo} className="h-20" alt="" />
           </NavLink>
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex space-x-6 items-center font-semibold ">
            <span className="cursor-pointer text-gray-700  hover:text-red-600">Home</span>
            <span className="cursor-pointer text-gray-700  hover:text-red-600">Services</span>
            <span className="cursor-pointer text-gray-700  hover:text-red-600">Social Media</span>
            <span className="cursor-pointer text-gray-700  hover:text-red-600">Find Us </span>
            <span className="cursor-pointer text-gray-700  hover:text-red-600">About Us </span>
          </div>

          {/* Right: Hotline & Login */}
          <div className="flex items-center space-x-4">
            <button>
              <Link>
              <img src={hotline} className="h-10" alt="" />
              </Link>
            </button>
            <button className="cursor-pointer">
              <img src={login} className="h-15 mt-2" alt="" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <span className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-100 cursor-pointer">
              Home
            </span>
            <span className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-100 cursor-pointer">
              About
            </span>
            <span className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-100 cursor-pointer">
              Services
            </span>
            <span className="block px-3 py-2 text-gray-700 rounded hover:bg-gray-100 cursor-pointer">
              Contact
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
