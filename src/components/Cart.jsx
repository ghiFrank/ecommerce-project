import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../redux/cartReducer';

const Cart = () => {

 const products = useSelector((state)=>state.cart.products)
 const dispatch = useDispatch();
const totalPrice = () => {
  let total = 0;
  
  products.forEach((item) =>  { total += item.quantity * item.price });
  
  return total.toFixed(2);
  
};


  return (
    <div className="absolute right-[20px] top-[80px] z-50 bg-white p-[20px] shadow-xl rounded-md">
      <h1 className="mb-[30px] text-gray-500 font-[400] text-[24px]">
        Products in your cart
      </h1>
      {products?.map((item) => (
        <div key={item.id} className="flex items-center gap-[20px] mb-[30px]">
          <img
            className="w-[80px] h-[100px] object-cover"
            src={item.img}
            alt=""
          />
          <div>
            <h1 className="mb-[30px] text-gray-500 font-[500] text-[18px]">
              {item.title}
            </h1>
            <p className="text-gray-500 mb-[10px] text-[14px]">
              {item.desc?.substring(0, 50)}
            </p>
            <div className="text-green-700">{item.quantity} x ${item.price}</div>
          </div>
          <DeleteOutlineIcon
            className="text-red-700 cursor-pointer text-[30px]"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="flex justify-between font-[500] text-[18px] mb-[20px]">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className="bg-[#2879FE] w-[250px] p-[10px] flex items-center justify-center gap-[20px] cursor-pointer border-none text-white font-[500] mb-[20px]">
        PROCEED TO CHECKOUT
      </button>
      <span
        className="text-red-700 text-[12px] cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  );
}

export default Cart