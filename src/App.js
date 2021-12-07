import React from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Feed from "./components/Feed/Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
