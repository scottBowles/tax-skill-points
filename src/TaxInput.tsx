import React from "react";

interface Props {
  name: string;
  points: number;
  index: number;
  incrementPoints: (index: number) => void;
  decrementPoints: (index: number) => void;
  changeName: (index: number, name: string) => void;
}

export function TaxInput({
  name,
  points,
  index,
  incrementPoints,
  decrementPoints,
  changeName,
}: Props) {
  return (
    <div>
      <input
        onChange={(event) => changeName(index, event.target.value)}
        value={name}
      ></input>
      <button onClick={() => incrementPoints(index)}>+</button>
      <button onClick={() => decrementPoints(index)}>-</button>
      <span>{points}</span>
    </div>
  );
}
