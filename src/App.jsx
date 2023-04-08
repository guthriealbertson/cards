import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./assets/cards.json";

function App() {
  const [choice, setChoice] = useState(0);

  return (
    <div className="App">
      <p>{data[choice].Category}</p>
      <h1>{data[choice].Question}</h1>
      <div className="next">
        <button onClick={() => setChoice(Math.floor(Math.random() * 150))}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;
