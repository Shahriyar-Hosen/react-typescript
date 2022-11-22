import React from "react";
import "./App.css";
import User from "./components/User";

const App = () => {
  const user1 = {
    name: "salman",
    age: 22,
    isRegistered: true,
    lang: ["Bangla", "English"],
  };
  const user2 = {
    name: "Saikot",
    age: 21,
    isRegistered: false,
    lang: ["Bangla", "English"],
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <User user={user1} />
      <User user={user2} />
    </div>
  );
};

export default App;
