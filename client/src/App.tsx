import React from 'react';
import './App.css';
import { io } from "socket.io-client"

const socket = io("http://localhost:3000")

socket.on("connect", () => {
  console.log("hello there")
})

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
