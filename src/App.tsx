import React, { useState } from "react";
import "./App.css";

function TaxInput() {
  return (
    <div>
      <input></input>
      <input type="number"></input>
    </div>
  );
}

function App() {
  const [inputs, setInputs] = useState(
    new Array(5).fill(<TaxInput></TaxInput>)
  );
  const handleClick = () =>
    setInputs((currentInputs) => [...currentInputs, <TaxInput></TaxInput>]);

  return (
    <div className="App">
      <h1>Tax Points</h1>
      <h4>Total Points: 70</h4>
      <h4>Points Remaining: 70</h4>
      {inputs}
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
