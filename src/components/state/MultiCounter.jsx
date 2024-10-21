// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function MultiCounter({inc}) {
  const [count, setCountFive] = useState(0);
  


  const increment = () => {
    setCountFive((prev) => prev + inc);
  };

  
  

  return (
    <>
      <div className="counter">
       
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <br /><br />
      </div>

      
    </>
  );
}

export default MultiCounter;
