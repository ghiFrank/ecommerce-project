import React from 'react'
import Card from '../Card/Card'

const List = () => {
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
      title: "Long Sleeve Graphic T-shirt 2",
      isNew: true,
      oldPrice: 16,
      price: 10,
    },
    {
      id: 3,
      img:"https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg",
      title: "Long Sleeve Graphic T-shirt 3",
      isNew: true,
      oldPrice: 16,
      price: 10,
    },
    {
      id: 4,
      img:"https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg",
      title: "Long Sleeve Graphic T-shirt 4",
      isNew: false,
      oldPrice: 16,
      price: 10,
    },
  ]
  return (
    <div className="flex justify-between flex-wrap">
      {data?.map(item=>(
      <Card item={item} key={item.id}/>
    ))}
    </div>
  )
}

export default List