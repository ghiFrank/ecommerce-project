import React from 'react'
import {Link} from 'react-router-dom'

function Card({item}) {
  return (
    <Link to={`/product/${item.id}`}>
        <div className='w-[280px] flex flex-col gap-[10px]'>
        <div className='w-full h-[400px] overflow-hidden relative group'>
          <img
            src={item.img}
            alt=""
            className='w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0'
          />
          <img
            src={item.img2}
            alt=""
            className='w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'
          />
        </div>
          <h2>{item.title}</h2>
          <div className='prices'>
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
        </div>
    </Link>
  )
}

export default Card