import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images =[
"https://images.pexels.com/photos/267242/pexels-photo-267242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg"
  ]
  return (
    <div className='pt-[20px] pr-[50px] flex gap-[50px]'>
      <div className='flex-[1] flex gap-[20px]'>
        <div className='flex-[1]'>
          <img className='w-full h-[150px] object-cover cursor-pointer mb-[10px]' src={images[0]} alt='' onClick={e => setSelectedImg(0)}/>
          <img className='w-full h-[150px] object-cover cursor-pointer' src={images[1]} alt='' onClick={e => setSelectedImg(1)}/>
        </div>
        <div className='flex-[5]'>
          <img className='w-full max-h-[800px] object-cover' src={images[selectedImg]} alt=''/>
        </div>
      </div>
      <div className='flex-[1] flex flex-col gap-[30px]'>
        <h1 className='text-[30px] font-bold'>Product Name</h1>
        <span className='text-[30px] text-[#2879FE] font-[500]'>$199</span>
        <p className='text-[18px] font-[300] text-justify'>
        Welcome to the Sword and Shield / Greatsword PvE Build Guide! This is the big brawler Tank in Throne and Liberty. The build leverages the strengths of both weapons for a ton of extra Health and Heavy Attack Chance. Sword and Shield / Greatswords has some of the best AoE farming potential in the game due to passives like Spectrum of Agony and active skills that can cleave off each other such as Frost Cleaving and Ice Tornado.
        </p>
        <div className='flex gap-[30px] items-center'>
          <button className='w-[50px] h-[50px] flex items-center justify-center cursor-pointer bg-red-200 rounded-lg' onClick={() => setQuantity((x) => (x === 1 ? 1 : x - 1))}>-</button>
          {quantity}
          <button className='w-[50px] h-[50px] flex items-center justify-center cursor-pointer bg-green-200 rounded-lg' onClick={() => setQuantity((x) => x + 1)}>+</button>
        </div>
        <button className='w-[250px] p-[10px] bg-[#2879FE] text-white flex items-center justify-center gap-[20px] cursor-pointer font-[500]'>
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className='flex gap-[20px]'>
          <div className='flex gap-[10px] text-[#2879FE] align-center text-[14px]'>
            <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className='flex gap-[10px] text-[#2879FE] align-center text-[14px]'>
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className='flex flex-col gap-[10px] text-gray-500 text-[14px] mt-[30px]'>
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr className='border-[1px] border-solid border-gray-100'/>
        <div className='flex flex-col gap-[10px] text-gray-500 text-[14px] mt-[30px]'>
          <span>DESCRIPTION</span>
          <hr className='border-[1px] border-solid border-gray-100 w-[250px]'/>
          <span>ADDITIONAL INFORMATION</span>
          <hr className='border-[1px] border-solid border-gray-100 w-[250px]'/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product