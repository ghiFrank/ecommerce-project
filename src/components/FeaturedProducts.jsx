import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "axios"
const FeaturedProducts = ({type}) => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.REACT_APP_API_URL}/products?populate=*`,
          {
            headers: {
              Authorization: `bearer ${import.meta.env.REACT_APP_API_TOKEN}`,
            },
          }
        );
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className=' mt-[100px] mb-[200px] mx-10'>
      <div className='flex items-center justify-between mb-[50px] text-justify'>
        <h1 className='flex flex-[1] capitalize font-extrabold'>{type} products</h1>
        <p className='flex flex-[3] text-gray-500'>
        Welcome to the Sword and Shield / Greatsword PvE Build Guide! This is the big brawler Tank in Throne and Liberty. The build leverages the strengths of both weapons for a ton of extra Health and Heavy Attack Chance. Sword and Shield / Greatswords has some of the best AoE farming potential in the game due to passives like Spectrum of Agony and active skills that can cleave off each other such as Frost Cleaving and Ice Tornado.
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