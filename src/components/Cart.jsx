import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

  const data =[
    {
      id: 1,
      img:"https://images.pexels.com/photos/1485166/pexels-photo-1485166.jpeg",
      img2:"https://images.pexels.com/photos/1755386/pexels-photo-1755386.jpeg",
      desc:'Welcome to the Sword and Shield / Greatsword PvE Build Guide! This is the big brawler Tank in Throne and Liberty. The build leverages the strengths of both weapons for a ton of extra Health and Heavy Attack Chance. Sword and Shield / Greatswords has some of the best AoE farming potential in the game due to passives like Spectrum of Agony and active skills that can cleave off each other such as Frost Cleaving and Ice Tornado.',
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img:"https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg",
      desc:'Welcome to the Sword and Shield / Greatsword PvE Build Guide! This is the big brawler Tank in Throne and Liberty. The build leverages the strengths of both weapons for a ton of extra Health and Heavy Attack Chance. Sword and Shield / Greatswords has some of the best AoE farming potential in the game due to passives like Spectrum of Agony and active skills that can cleave off each other such as Frost Cleaving and Ice Tornado.',
      title: "Long Sleeve Graphic T-shirt 2",
      isNew: true,
      oldPrice: 16,
      price: 10,
    },
  ]

  return (
    <div className='absolute right-[20px] top-[80px] z-50 bg-white p-[20px] shadow-xl rounded-md'>
      <h1 className='mb-[30px] text-gray-500 font-[400] text-[24px]'>Products in your cart</h1>
      {data?.map(item=>(
        <div key={item.id} className='flex items-center gap-[20px] mb-[30px]'>
          <img className='w-[80px] h-[100px] object-cover' src={item.img} alt=''/>
          <div>
            <h1 className='mb-[30px] text-gray-500 font-[500] text-[18px]'>{item.title}</h1>
            <p className='text-gray-500 mb-[10px] text-[14px]'>{item.desc.substring(0,50)}</p>
            <div className='text-green-700'>1 x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className='text-red-700 cursor-pointer text-[30px]'/>
        </div>
      ))}
      <div className='flex justify-between font-[500] text-[18px] mb-[20px]'>
        <span>SUBTOTAL</span>
        <span>$262</span>
      </div>
      <button className='bg-[#2879FE] w-[250px] p-[10px] flex items-center justify-center gap-[20px] cursor-pointer border-none text-white font-[500] mb-[20px]'>PROCEED TO CHECKOUT</button>
      <span className='text-red-700 text-[12px] cursor-pointer' >Reset Cart</span>
    </div>
  )
}

export default Cart