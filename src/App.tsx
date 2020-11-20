import React, { useState } from "react";
import "./App.css";
import { TaxInput } from "./TaxInput";

function App() {
  const startingTaxes = [
    { name: "Land Value", points: 0 },
    { name: "Value Added", points: 0 },
    { name: "Income", points: 0 },
    { name: "Carbon", points: 0 },
    { name: "Capital Gains", points: 0 },
  ];

  const [taxes, setTaxes] = useState(startingTaxes);

  const pointsRemaining = taxes.reduce((acc, cur) => acc - cur.points, 70);

  const addRow = () =>
    setTaxes((currentTaxes) => [...currentTaxes, { name: "", points: 0 }]);

  const incrementPoints = (index: number) =>
    setTaxes(
      taxes.map((tax, taxIndex) =>
        index === taxIndex ? { ...tax, points: tax.points + 1 } : tax
      )
    );

  const decrementPoints = (index: number) =>
    setTaxes(
      taxes.map((tax, taxIndex) =>
        index === taxIndex ? { ...tax, points: tax.points - 1 } : tax
      )
    );

  const changeName = (index: number, name: string) =>
    setTaxes(
      taxes.map((tax, taxIndex) =>
        index === taxIndex ? { ...tax, name } : tax
      )
    );

  return (
    <div className="App">
      <h1>Tax Points</h1>
      <h4>Total Points: 70</h4>
      <h4>Points Remaining: {pointsRemaining}</h4>
      {taxes.map((tax, index) => (
        <TaxInput
          name={tax.name}
          points={tax.points}
          index={index}
          incrementPoints={incrementPoints}
          decrementPoints={decrementPoints}
          changeName={changeName}
        />
      ))}
      <button onClick={addRow}>+</button>
    </div>
  );
}

export default App;
