import React from "react"
import Card from './Card';
import useFetch from '../hooks/useFetch';

const FeaturedProducts = ({type}) => {

 const {data,loading,error} = useFetch(
  `/products?populate=*&[filters][type][$eq]=${type}`
);
 
  return (
    <div className=" mt-[100px] mb-[200px] mx-10">
      <div className="flex items-center justify-between mb-[50px] text-justify">
        <h1 className="flex flex-[1] capitalize font-extrabold">
          {type} products
        </h1>
        <p className="flex flex-[3] text-gray-500">
          Discover the perfect blend of featured and trending products in our
          exclusive collection. Handpicked for their superior quality and
          craftsmanship, our featured items are timeless essentials that stand
          out for their durability and style. Meanwhile, our trending products
          are the must-have pieces everyone’s talking about, offering the latest
          in fashion and design.
        </p>
      </div>
      <div className="flex justify-center gap-[50px]">
        {error
          ? "error"
          : loading
          ? "loading"
          : data?.slice(0, 3).map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts