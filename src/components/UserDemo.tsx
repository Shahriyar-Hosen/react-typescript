import React from "react";
import User from "./User";

type UserArray = {
  users: {
    id: number;
    name: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
  }[];
};

const UserDemo = ({ users }: UserArray) => {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserDemo;
