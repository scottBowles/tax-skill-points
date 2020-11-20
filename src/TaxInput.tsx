import React from "react";
import { BsTrash } from "react-icons/bs";

interface Props {
  name: string;
  points: number;
  index: number;
  incrementPoints: (index: number) => void;
  decrementPoints: (index: number) => void;
  changeName: (index: number, name: string) => void;
  removeTax: (index: number) => void;
}

export function TaxInput({
  name,
  points,
  index,
  incrementPoints,
  decrementPoints,
  changeName,
  removeTax,
}: Props) {
  return (
    <>
      <input
        onChange={(event) => changeName(index, event.target.value)}
        value={name}
        className={"taxName"}
      />
      <button onClick={() => incrementPoints(index)} className={"increment"}>
        +
      </button>
      <button onClick={() => decrementPoints(index)} className={"decrement"}>
        -
      </button>
      <span className={"points"}>{points}</span>
      <BsTrash className={"delete"} onClick={() => removeTax(index)} />
    </>
  );
}
