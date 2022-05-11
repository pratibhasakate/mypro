import React, { useState } from 'react';
import Profile from '../header/profile/Profile';

const Butoon = () => {
  // let heading = "This is Button"
  // const handleClick =() =>{
        // heading ="New Heading"
        // console.log(heading)
        const[heading, setHeading] = useState("This is Button");
        const handleClick = () => {
          const ab = Math.random();
          // setHeading("New Heading")
          setHeading(ab)
}     
  return (
    <div>
      {heading}
      <Profile shareHeading={heading}/>

      <button onClick={handleClick}> Change Heding </button>
      
    </div>
  )
}

export default Butoon;
