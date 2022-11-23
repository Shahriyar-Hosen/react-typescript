import React, { useState } from "react";

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
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default StateManagement;
