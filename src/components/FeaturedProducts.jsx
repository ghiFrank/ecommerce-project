import React from "react"
import Card from './Card';
import useFetch from '../hooks/useFetch';

const FeaturedProducts = ({type}) => {

 const {data,loading,error} = useFetch(
  `/products?populate=*&[filters][type][$eq]=${type}`
);
 
  return (
    <div className=' mt-[100px] mb-[200px] mx-10'>
      <div className='flex items-center justify-between mb-[50px] text-justify'>
        <h1 className='flex flex-[1] capitalize font-extrabold'>{type} products</h1>
        <p className='flex flex-[3] text-gray-500'>
        Welcome to the Sword and Shield / Greatsword PvE Build Guide! This is the big brawler Tank in Throne and Liberty. The build leverages the strengths of both weapons for a ton of extra Health and Heavy Attack Chance. Sword and Shield / Greatswords has some of the best AoE farming potential in the game due to passives like Spectrum of Agony and active skills that can cleave off each other such as Frost Cleaving and Ice Tornado.
        </p>
      </div>
      <div className='flex justify-center gap-[50px]'>
         {error ? 
         "error" : 
         (loading ? "loading" : data?.map(item=>(
          <Card item={item} key={item.id}/>
         )))} 
      </div>
    </div>
  )
}

export default FeaturedProducts