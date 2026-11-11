import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const heroes = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Spider-Man",
  "Black Panther"
];

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        textAlign: "center",
        padding: "50px",
        minHeight: "100vh"
      }}
    >
      <h1>Universe No</h1>

      <h2>Universe: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
<div className="heroes">
  <h2>Marvel Characters</h2>

  {heroes.map((hero, index) => (
    <p key={index}>{hero}</p>
  ))}
</div>
      <br /><br />

      <button onClick={() => setDark(!dark)}>
        Switch to Dark
      </button>
    </div>
  );
}

export default Counter;