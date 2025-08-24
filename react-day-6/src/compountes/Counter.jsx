import React, { useState } from 'react'

function counter() {
    const[count,setcount] = useState(0);

    const increment = () => {
        setcount(count+1);
    }
    const decrement = () => {
        setcount(count-1);
    }
    const reset = () => {
        setcount(0);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}disabled={count===0}>Decrement</button>
        <button onClick={reset}disabled={count==0}>Reset</button>
    </div>
  )
}

export default counter