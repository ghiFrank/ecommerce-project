import React from 'react'
import Slider from '../components/Slider'
import FeaturedProducts from '../components/FeaturedProducts'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Categories/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home