import React from 'react'
import HouseDisplay from '../HouseDisplay'

const Home = ({houses, setHouses}) => {


  return (
    <div>
       
      <HouseDisplay houses = {houses} setHouses ={setHouses} />
    </div>
  )
}

export default Home
