import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png"; // Adjust the path to your logo
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-lg navbar font-krona bg-gray-200">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden sm:flex sm:items-center sm:ml-6 sm:space-x-4 font-medium  ">
          {/* <NavLink href="/home">HOME</NavLink>
              <NavLink href="/about">ABOUT</NavLink>
              <NavLink href="/news">NEWS</NavLink>
              <NavLink href="/contact">CONTACT</NavLink> */}
               <Link to={"/home"}>HOME</Link>
              <Link to={"/about"}>ABOUT</Link>
              <Link to={"/news"}>NEWS</Link>
              <Link to={"/contact"}>CONTACT</Link>
              
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden ">
            <button
              className="p-2 text-gray-300 rounded-md hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar - Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar Content */}
          <div className="w-full h-full p-4 transition-transform duration-300 ease-in-out transform backdrop-filter backdrop-blur-lg shadow-lg">
            {/* Close Button */}
            <div className="flex items-center justify-between mb-4">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <FiX className="w-10 h-10" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center justify-center space-y-16 text-2xl font-medium " onClick={toggleMenu}>
              {/* <NavLink href="#home">HOME</NavLink>
              <NavLink href="#about">ABOUT</NavLink>
              <NavLink href="#news">NEWS</NavLink>
              <NavLink href="#contact">CONTACT</NavLink> */}
              <Link to={"/home"}>HOME</Link>
              <Link to={"/about"}>ABOUT</Link>
              <Link to={"/news"}>NEWS</Link>
              <Link to={"/contact"}>CONTACT</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// NavLink Component for Consistency
const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="w-full px-4 py-2 text-lg font-medium text-gray-400 rounded-full  hover:text-white"
    >
      {children}
    </a>
  );
};

export default Navbar;
