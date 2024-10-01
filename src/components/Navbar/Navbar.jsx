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
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <Close /> : <Menu />}
            </button>
          </div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-center">
            MyBrand
          </div>

          {/* Left Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Shop
            </a>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProductsMenu}
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                Products <ExpandMore />
              </button>
              {isProductsOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sneakers
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Boots
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Moccasins
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Accessories
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 lg:hidden">
              <ShoppingCart />
            </button>
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">
                <Search />
              </button>
              <button className="text-gray-700 hover:text-gray-900">
                <AccountCircle />
              </button>
              <button className="text-gray-700 hover:text-gray-900">
                <Favorite />
              </button>
              <button className="text-gray-700 hover:text-gray-900">
                <ShoppingCart />
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu for small screens */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Shop
              </a>

              {/* Products Dropdown for small screens */}
              <div>
                <button
                  onClick={toggleProductsMenu}
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  Products <ExpandMore />
                </button>
                {isProductsOpen && (
                  <div className="mt-2 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-700 hover:bg-gray-100"
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

              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
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
