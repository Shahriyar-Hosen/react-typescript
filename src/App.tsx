import React from "react";
import "./App.css";
import User from "./components/User";
import UserDemo from "./components/UserDemo";

const App = () => {
  const user1 = {
    id: 1,
    name: "salman",
    age: 22,
    isRegistered: true,
    lang: ["Bangla", "English"],
  };
  const user2 = {
    id: 2,
    name: "Saikot",
    age: 21,
    isRegistered: false,
    lang: ["Bangla", "English"],
  };

  const users = [
    {
      id: 1,
      name: "salman",
      age: 22,
      isRegistered: true,
      lang: ["Bangla", "English"],
    },
    {
      id: 2,
      name: "Saikot",
      age: 21,
      isRegistered: false,
      lang: ["Bangla", "English"],
    },
  ];

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserDemo users={users} />
    </div>
  );
};

export default App;
