import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-[10px] mt-[15px]">
      {/* Accessories Category */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="images/accessories.webp"
          alt="Accessories"
          className="w-full h-full object-cover z-0"
        />
        <button className="absolute inset-0 m-auto w-44 h-10 flex items-center justify-center bg-white  text-black ">
          <Link
            to="products/2"
            className="relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-[50%] hover:after:left-[25%]"
          >
            Accessories
          </Link>
        </button>
      </div>

      {/* sneakers Category */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="images/sneakers.webp"
          alt="Sneakers"
          className="w-full h-full object-cover z-0"
        />
        <button className="absolute inset-0 m-auto w-44 h-10 flex items-center justify-center bg-white  text-black ">
          <Link
            to="products/8"
            className="relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-[50%] hover:after:left-[25%]"
          >
            Sneakers
          </Link>
        </button>
      </div>
      {/* Mocassins Category */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="images/mocassins.webp"
          alt="Mocassins"
          className="w-full h-full object-cover z-0"
        />
        <button className="absolute inset-0 m-auto w-44 h-10 flex items-center justify-center bg-white  text-black ">
          <Link
            to="products/4"
            className="relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-[50%] hover:after:left-[25%]"
          >
            Mocassins
          </Link>
        </button>
      </div>

      {/* Boots Category */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="images/boots.webp"
          alt="Boots"
          className="w-full h-full object-cover z-0"
        />
        <button className="absolute inset-0 m-auto w-44 h-10 flex items-center justify-center bg-white  text-black ">
          <Link
            to="products/5"
            className="relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-[50%] hover:after:left-[25%]"
          >
            Boots
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Categories;
