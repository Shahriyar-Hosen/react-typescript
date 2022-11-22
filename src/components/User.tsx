import React from "react";

type userProps = {
  user: {
    id: number | string;
    name: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
  };
};

const User = ({ user }: userProps) => {
  const { name, age, isRegistered, lang } = user || {};
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>{isRegistered ? "Is Registered User" : "Not Registered User"}</p>
      <p>
        Language:{" "}
        {lang.map((l, i) => {
          return <span key={i}> {l} </span>;
        })}
      </p>
    </div>
  );
};

export default User;
