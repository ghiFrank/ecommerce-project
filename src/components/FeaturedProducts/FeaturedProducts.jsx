import React from 'react'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

  const data =[
    {
      id: 1,
      img:"https://images.pexels.com/photos/1485166/pexels-photo-1485166.jpeg",
      img2:"https://images.pexels.com/photos/1755386/pexels-photo-1755386.jpeg",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img:"https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 16,
      price: 10,
    },
  ]
  return (
    <div className=' mt-[100px] mb-[200px]'>
      <div className='flex items-center justify-between mb-[50px]'>
        <h1 className='flex flex-[1] capitalize font-extrabold'>{type} products</h1>
        <p className='flex flex-[3] text-gray-500'>
          blablablablablablablablablablablablablablablablablablablablablablablablablabla
        </p>
      </div>
      <div className='flex justify-center gap-[50px]'>
         {data.map(item=>(
          <Card item={item} key={item.id}/>
         ))} 
      </div>
    </div>
  )
}

export default FeaturedProducts