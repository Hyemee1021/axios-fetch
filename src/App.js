import React from "react";
import Axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        setJoke(response.data.setup + "...." + response.data.punchline);
      }
    );
  };
  return (
    <div>
      Let's get some jokes
      <br />
      <button onClick={getJoke}>Click</button>
      <br />
      <p>{joke}</p>
    </div>
  );
}
export default App;
