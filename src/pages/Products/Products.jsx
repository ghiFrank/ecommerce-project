import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'


const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort,setSort] = useState(null)
  return (
    <div className='px-[30px] py-[50px] flex'>
      <div className='flex-[1] sticky h-[100%] top-[50px]'>
        <div className='mb-[30px]'>
          <h2 className=' font-extrabold mb-[20px]'>Product Categories</h2>
          <div>
            <input className="mb-[10px]" type="checkbox" id='1' value={1}/>
            <label className="ml-[10px]" htmlFor='1'>Shoes</label>
          </div>
          <div>
            <input className="mb-[10px]" type="checkbox" id='2' value={2}/>
            <label className="ml-[10px]" htmlFor='2'>Skirts</label>
          </div>
          <div>
            <input className="mb-[10px]" type="checkbox" id='3' value={3}/>
            <label className="ml-[10px]" htmlFor='3'>Coats</label>
          </div>
        </div>
        <div className='mb-[30px]'>
          <h2 className=' font-extrabold mb-[20px]'>Filter by price</h2>
          <span>0</span>
          <input type='range' min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
        </div>
        <div className='mb-[30px]'>
          <h2 className=' font-extrabold mb-[20px]'>Sort by</h2>
          <div className='inputItem'>
            <input className="mb-[10px]" type='radio' id='asc' value="asc" name='price' onChange={e=>setSort("asc")}/>
            <label className="ml-[10px]" htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input className="mb-[10px]" type='radio' id='desc' value="desc" name='price' onChange={e=>setSort("desc")}/>
            <label className="ml-[10px]" htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='flex-[3]'>
        <img className="w-[100%] h-[300px] object-cover mb-[50px]" src="https://images.pexels.com/photos/267242/pexels-photo-267242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products