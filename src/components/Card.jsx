import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link to={`/product/${item.documentId}`}>
      <div className="w-[380px] h-[400px] flex flex-col gap-[10px] mb-[50px]">
        <div className="w-full h-[400px] overflow-hidden relative group">
          {item?.isNew && (
            <span className="absolute top-[5px] left-[5px] bg-white text-teal-600 px-[5px] py-[3px] z-10 font-[500] text-[12px]">
              New Season
            </span>
          )}
          <img
            src={`${import.meta.env.VITE_API_UP_URL + item.image.url}`}
            className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
          />
          <img
            src={`${import.meta.env.VITE_API_UP_URL + item.image2.url}`}
            className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
        <h2 className="font-[400] text-[16px]">{item?.title}</h2>
        <div className="flex gap-5">
          <h3 className="font-[500] text-[18px]">${item?.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
