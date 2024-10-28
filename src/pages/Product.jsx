import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("image");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="pt-5 px-4 md:px-10 flex flex-col lg:flex-row gap-10 lg:gap-20">
      {loading ? (
        "loading"
      ) : (
        <>
          {/* Image section */}
          <div className="flex-[1] flex flex-col lg:flex-row gap-5">
            <div className="flex-[1] flex lg:flex-col gap-5 lg:gap-0">
              <img
                className="w-full h-[150px] object-cover cursor-pointer mb-2"
                src={`${import.meta.env.VITE_API_UP_URL + data?.image.url}`}
                alt=""
                onClick={() => setSelectedImg("image")}
              />
              <img
                className="w-full h-[150px] object-cover cursor-pointer"
                src={`${import.meta.env.VITE_API_UP_URL + data?.image2.url}`}
                alt=""
                onClick={() => setSelectedImg("image2")}
              />
            </div>
            <div className="flex-[5]">
              <img
                className="w-full max-h-[500px] lg:max-h-[800px] object-cover"
                src={`${
                  import.meta.env.VITE_API_UP_URL + data?.[selectedImg].url
                }`}
                alt=""
              />
            </div>
          </div>

          {/* Product details section */}
          <div className="flex-[1] flex flex-col gap-8 lg:gap-10">
            <h1 className="text-2xl lg:text-3xl font-bold">{data?.title}</h1>
            <span className="text-2xl text-blue-500 font-medium">
              ${data?.price}
            </span>
            <p className="text-sm lg:text-lg font-light text-justify">
              {data?.description}
            </p>

            <div className="flex gap-5 items-center">
              <button
                className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer bg-red-200 rounded-lg"
                onClick={() => setQuantity((x) => (x === 1 ? 1 : x - 1))}
              >
                -
              </button>
              {quantity}
              <button
                className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer bg-green-200 rounded-lg"
                onClick={() => setQuantity((x) => x + 1)}
              >
                +
              </button>
            </div>

            <button
              className="w-full max-w-[250px] p-2 bg-blue-500 text-white flex items-center justify-center gap-4 cursor-pointer font-medium"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.title,
                    price: data.price,
                    des: data.desc,
                    img: import.meta.env.VITE_API_UP_URL + data.image.url,
                    quantity: quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>

            <div className="flex gap-5">
              <div className="flex items-center gap-2 text-blue-500 text-sm">
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </div>
              <div className="flex items-center gap-2 text-blue-500 text-sm">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="flex flex-col gap-4 text-gray-500 text-sm mt-5">
              <span>DESCRIPTION</span>
              <hr className="border-gray-200 w-[200px]" />
              <span>ADDITIONAL INFORMATION</span>
              <hr className="border-gray-200 w-[200px]" />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
