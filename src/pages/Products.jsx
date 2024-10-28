import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChanges = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="flex flex-col lg:flex-row mt-10 px-4 lg:px-10 gap-8">
      {/* Sidebar (Filters) */}
      <div className="lg:flex-[1] w-full lg:w-auto">
        <div className="mb-8">
          <h2 className="font-extrabold mb-6 text-lg lg:text-xl">
            Product Categories
          </h2>
          {data?.map((item) => (
            <div key={item.id} className="mb-4">
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChanges}
                className="mr-2"
              />
              <label htmlFor={item.id} className="text-sm lg:text-base">
                {item.title}
              </label>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="font-extrabold mb-6 text-lg lg:text-xl">
            Filter by price
          </h2>
          <div className="flex items-center justify-between text-sm lg:text-base">
            <span>0</span>
            <input
              className="mx-4 flex-grow"
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="font-extrabold mb-6 text-lg lg:text-xl">Sort by</h2>
          <div className="mb-4">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
              className="mr-2"
            />
            <label htmlFor="asc" className="text-sm lg:text-base">
              Price (Lowest first)
            </label>
          </div>
          <div className="mb-4">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
              className="mr-2"
            />
            <label htmlFor="desc" className="text-sm lg:text-base">
              Price (Highest first)
            </label>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="lg:flex-[3]">
        <img
          className="w-full h-[200px] lg:h-[300px] object-cover mb-8"
          src="/images/banner.webp"
          alt="Banner"
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
