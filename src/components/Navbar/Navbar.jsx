import React, { useState } from "react";
import {
  ShoppingCart,
  Favorite,
  AccountCircle,
  Search,
  Menu,
  Close,
  ExpandMore,
} from "@mui/icons-material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full leading-custom z-50 bg-transparent hover:bg-white  transition-all duration-300 border-b border-b-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative text-[14px] text-customGray transition-all duration-300">
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-customGray  transition-all duration-300"
            >
              {isOpen ? <Close /> : <Menu />}
            </button>
          </div>

          {/* Centered Logo */}
          <div className="absolute text-black left-1/2 transform -translate-x-1/2 text-2xl font-bold text-center">
            MyBrand
          </div>

          {/* Left Menu */}
          <div className="hidden lg:flex items-center space-x-4 font-medium uppercase">
            <a
              href="#"
              className="text-customGray  transition-all duration-300"
            >
              Home
            </a>
            <a href="#" className="text-customGray  transition-all duration-300">
              Shop
            </a>

            {/* Products Dropdown */}
            <div className="relative ">
              <button
                onClick={toggleProductsMenu}
                className="flex items-center text-customGray transition-all duration-300 font-medium uppercase"
              >
                Products <ExpandMore />
              </button>
              {isProductsOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md z-50 text-[12px]">
                  <a href="#" className="block px-4 py-2 text-gray-700 ">
                    Sneakers
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 ">
                    Boots
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 0">
                    Moccasins
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 ">
                    Accessories
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-customGray  transition-all duration-300">
              About
            </a>
            <a href="#" className="text-customGray  transition-all duration-300">
              Contact
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-customGray transition-all duration-300 lg:hidden">
              <LocalMallOutlinedIcon />
            </button>
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-customGray  transition-all duration-300">
                <Search />
              </button>
              <button className="text-customGray transition-all duration-300">
                <PersonOutlineOutlinedIcon />
              </button>
              <button className="text-customGray transition-all duration-300">
                <FavoriteBorderOutlinedIcon />
              </button>
              <button className="text-customGray  transition-all duration-300">
                <LocalMallOutlinedIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu for small screens */}
        {isOpen && (
          <div className="lg:hidden font-medium uppercase">
            <div className="flex flex-col space-y-4 py-4 text-[14px]">
              <a href="#" className="text-customGray  transition-all duration-300">
                Home
              </a>
              <a href="#" className="text-customGray transition-all duration-300">
                Shop
              </a>

              {/* Products Dropdown for small screens */}
              <div>
                <button
                  onClick={toggleProductsMenu}
                  className="flex items-center text-customGray  transition-all duration-300 uppercase text-[14px]"
                >
                  Products <ExpandMore />
                </button>
                {isProductsOpen && (
                  <div className="mt-2 ml-2 space-y-2 text-[12px]">
                    <a
                      href="#"
                      className=" block text-gray-700 hover:bg-gray-100"
                    >
                      Sneakers
                    </a>
                    <a
                      href="#"
                      className="block text-gray-700 hover:bg-gray-100"
                    >
                      Boots
                    </a>
                    <a
                      href="#"
                      className="block text-gray-700 hover:bg-gray-100"
                    >
                      Moccasins
                    </a>
                    <a
                      href="#"
                      className="block text-gray-700 hover:bg-gray-100"
                    >
                      Accessories
                    </a>
                  </div>
                )}
              </div>

              <a href="#" className="text-customGray  transition-all duration-300">
                About
              </a>
              <a href="#" className="text-customGray  transition-all duration-300">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
