import React from "react";
import "./App.css";
import Button from "./components/Button";
import FetchData from "./components/FetchData";
import UserDemo from "./components/UserDemo";

const App = () => {
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
      {/* <UserDemo users={users} /> */}
      {/* <FetchData status="success" /> */}
      <Button>Click Me! (- _ -)</Button>
    </div>
  );
};

export default App;
