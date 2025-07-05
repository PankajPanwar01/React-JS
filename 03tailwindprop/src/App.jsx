import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card"

function App() {
  let myobj = {
    username : "ram",
    age : 20
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card username = "chai or code" btnText="click me"/>
      <Card username= "Check It" btnText="visit me"/>
    </>
  );
}

export default App;
