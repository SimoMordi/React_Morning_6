import React from 'react'

const HouseDisplay = ({houses}) => {
  
    
  return (
    <>
<div>
    <h1>My Houses</h1>
    
    <div>
        {houses.map((house) => (
            <div>
              <p> Name-{house.name} </p> 
               
                Price-{house.price} 

            </div>
        ))}
    </div>
    
        
</div>
</>
  )

        }
export default HouseDisplay
