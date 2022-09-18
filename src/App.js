import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");

  const addNumber = (e) => {
    setNumber(number.concat(e.target.innerText));
  };
  return (
    <div className="calculator">
      <input type="text" defaultValue={number} />
      <button onClick={addNumber}>1</button>
      <button onClick={addNumber}>2</button>
      <button onClick={addNumber}>3</button>
      <button onClick={addNumber}>/</button>
      <button onClick={addNumber}>4</button>
      <button onClick={addNumber}>5</button>
      <button onClick={addNumber}>6</button>
      <button onClick={addNumber}>*</button>
      <button onClick={addNumber}>7</button>
      <button onClick={addNumber}>8</button>
      <button onClick={addNumber}>9</button>
      <button onClick={addNumber}>-</button>
      <button onClick={addNumber}>.</button>
      <button onClick={addNumber}>0</button>
      <button
        onClick={() => {
          setNumber("");
        }}
      >
        C
      </button>
      <button onClick={addNumber}>+</button>

      <button
        onClick={() => {
          try {
            let a = eval(number);
            setNumber(a.toString());
          } catch (error) {
            setNumber("Error");
          }
        }}
      >
        =
      </button>
    </div>
  );
}

export default App;
