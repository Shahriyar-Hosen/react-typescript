import React from "react";

type userProps = {
  name: string;
  age: number;
  isRegistered: boolean;
};

const User = ({ name, age, isRegistered }: userProps) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>{isRegistered ? "is registered" : "not registered user"}</p>
    </div>
  );
};

export default User;
