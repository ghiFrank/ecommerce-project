import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';


const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  const prevSlide =() =>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  };
  const nextSlide =() =>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  };
  
  return (
    <div className='h-custom-calc w-[100vw]'>
      <div className='w-[300vw] h-[100%] flex transition-all ease-in duration-[800ms] overflow-hidden' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img className="w-[100vw] h-[100%] object-cover" src={data[0]} alt=""/>
        <img className="w-[100vw] h-[100%] object-cover" src={data[1]} alt=""/>
        <img className="w-[100vw] h-[100%] object-cover" src={data[2]} alt=""/>
      </div>
      <div  className='absolute flex left-0 right-0 m-auto bottom-[100px] w-fit gap-10'>
        <div className='border-[3px] rounded-full border-black w-[50px] h-[50px] flex items-center justify-center cursor-pointer' onClick={prevSlide}>
          <WestIcon/>
        </div>
        <div className='border-[3px] rounded-full border-black w-[50px] h-[50px] flex items-center justify-center cursor-pointer' onClick={nextSlide}>
          <EastIcon/>
        </div>
      </div>
    </div>
  )
}

export default Slider