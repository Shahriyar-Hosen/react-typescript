import React, { useState } from "react";
import State1 from "./State1";
import State2 from "./State2";

const StateManagement = () => {
  // type is automatically infereed as number
  const [count, setCount] = useState(0);

  const handleIncrement = (): void => {
    setCount((count) => count + 1);
  };

  const handleDecrement = (): void => {
    setCount((count) => count - 1);
  };
  return (
    <>
      <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <State2 />
    </>
  );
};

export default StateManagement;
