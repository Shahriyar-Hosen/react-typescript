import React from "react";
import "./App.css";
import Button from "./components/Button";
import FetchData from "./components/FetchData";
import StateManagement from "./components/StateManagement";
import StyleBtn from "./components/StyleBtn";
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

  const btnStyle = {
    color: "red",
    background: "navy",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    marginLeft: 5,
  };

  return (
    <div className="App">
      {/* <h1>User Management</h1> */}
      {/* <UserDemo users={users} /> */}
      {/* <FetchData status="success" /> */}
      {/* <Button>Click Me! (- _ -)</Button>
      <StyleBtn btnStyle={btnStyle} /> */}
      <StateManagement />
    </div>
  );
};

export default App;
