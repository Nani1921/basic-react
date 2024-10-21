// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Counter({ initialvalue }) {
  const [count, setCount] = useState(initialvalue);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) increment();
  };
  const incrementTen = () => {
    for (let i = 0; i < 10; i++) increment();
  };

  return (
    <>
      <div className="counter">
        <h1>Count: {count}</h1>
        <button onClick={incrementFive}>Increment</button><br />
        <br />
        <button onClick={incrementTen}>Increment</button>
      </div>
    </>
  );
}

export default Counter;