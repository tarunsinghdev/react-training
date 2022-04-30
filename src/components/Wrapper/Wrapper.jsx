import React, { useState } from 'react'
import Counter from '../Counter/Counter'

const Wrapper = () => {
    const [inputValue, setInputValue] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [unmount, setUnmount] = useState(false);
  return (
    <div>Wrapper
         <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="number" />
         <button onClick={() => setIsClicked((isClicked) => !isClicked)} >Start</button>
         <button onClick={() => setIsClicked(false)}>Stop</button>
         <button onClick={() => setUnmount(true)}>Delete</button>

        {!unmount && <Counter isClicked={isClicked} startFrom={inputValue}/>}
    </div>
  )
}

export default Wrapper