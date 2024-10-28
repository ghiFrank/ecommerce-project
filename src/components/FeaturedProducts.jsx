import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="mt-[100px] mb-[200px] mx-10">
      {/* Heading and Description */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-[50px] text-justify gap-5">
        <h1 className="capitalize font-extrabold text-3xl">{type} products</h1>
        <p className="text-gray-500 lg:text-left text-center">
          Discover the perfect blend of featured and trending products in our
          exclusive collection. Handpicked for their superior quality and
          craftsmanship, our featured items are timeless essentials that stand
          out for their durability and style. Meanwhile, our trending products
          are the must-have pieces everyone’s talking about, offering the latest
          in fashion and design.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center">
        {error
          ? "error"
          : loading
          ? "loading"
          : data?.slice(0, 3).map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
