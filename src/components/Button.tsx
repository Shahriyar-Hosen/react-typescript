import React from "react";

type ButtonType = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonType) => {
  return <button>{children} </button>;
};

export default Button;
