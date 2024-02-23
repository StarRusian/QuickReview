import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import AboutUs from './AboutUs'


const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCategory />
        <CategoryShowCase />
        <AboutUs />
        
    </div>
  )
}

export default Home