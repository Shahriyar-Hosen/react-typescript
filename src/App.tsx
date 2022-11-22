import React from "react";
import "./App.css";
import User from "./components/User";

const App = () => {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User name="salman" age={22} isRegistered />
      <User name="saikot" age={21} isRegistered={false} />
    </div>
  );
};

export default App;
