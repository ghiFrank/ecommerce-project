import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../components/List'
import useFetch from "../hooks/useFetch"


const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort,setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {data,loading,error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const handleChanges = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value) )
  }
  console.log(selectedSubCats)
  return (
    <div className="mt-16 px-[30px] py-[50px] flex">
      <div className="flex-[1] sticky h-[100%] top-[50px]">
        <div className="mb-[30px]">
          <h2 className=" font-extrabold mb-[20px]">Product Categories</h2>
          {data?.map((item) => (
            <div key={item.id}>
              <input
                className="mb-[10px]"
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChanges}
              />
              <label className="ml-[10px]" htmlFor={item.id}>
                {item.title}
              </label>
            </div>
          ))}
        </div>
        <div className="mb-[30px]">
          <h2 className=" font-extrabold mb-[20px]">Filter by price</h2>
          <span>0</span>
          <input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>
        <div className="mb-[30px]">
          <h2 className=" font-extrabold mb-[20px]">Sort by</h2>
          <div className="inputItem">
            <input
              className="mb-[10px]"
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label className="ml-[10px]" htmlFor="asc">
              Price (Lowest first)
            </label>
          </div>
          <div className="inputItem">
            <input
              className="mb-[10px]"
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label className="ml-[10px]" htmlFor="desc">
              Price (Highest first)
            </label>
          </div>
        </div>
      </div>
      <div className="flex-[3]">
        <img
          className="w-[100%] h-[300px] object-cover mb-[50px]"
          src="https://images.pexels.com/photos/267242/pexels-photo-267242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort}subCats={selectedSubCats} />
      </div>
    </div>
  );
}

export default Products