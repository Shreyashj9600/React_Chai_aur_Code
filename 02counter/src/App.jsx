import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const addVal = () => {
    if (count < 20) {
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    }
    console.log(`btn is working `);
  };

  const removeVal = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    console.log(`btn is working `);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {count}</h2>

      <button onClick={addVal}>Add value</button>
      <br></br>
      <br></br>
      <button onClick={removeVal}>remove value</button>
    </>
  );
}

export default App;
