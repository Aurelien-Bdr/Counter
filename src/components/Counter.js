import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState("");

  const handlechange = (event) => {
    setCount(Number(event.currentTarget.value));
  };

  return (
    <div className="container">
      <input
        type="number"
        value={count}
        onChange={handlechange}
        placeholder="Choose initial number"
      ></input>
      <p>Le compteur est à : {count} </p>
      <button onClick={() => setCount(Number(count + 1))}>+1</button>
      <button onClick={() => setCount(Number(count - 1))}>-1</button>
    </div>
  );
}

export default Counter;
