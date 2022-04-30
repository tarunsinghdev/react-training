import React, { useEffect, useState } from 'react'

const Counter = ({startFrom, isClicked}) => {
   const [counterValue, setCounterValue ] = useState(startFrom)

   useEffect(() => {
     
     setCounterValue(Number(startFrom))
   },[startFrom])


  useEffect(() => {
      if(!isClicked) return;
   let intervalId = setInterval(() => {
       console.log('inside interval', counterValue);
         setCounterValue(counterValue  + 1);
   }, 1000);
   return () =>clearInterval(intervalId);   
  })

  


  return (
    <div>{counterValue}</div>
  )
}

export default Counter