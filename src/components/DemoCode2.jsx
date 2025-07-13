import React, { useState } from "react";
import getPrime from "../utils/getPrime";

const DemoCode2 = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(true); // false for black , true for white

  console.log("Component Rendered");

  const prime = getPrime(number);

  return (
    <div className={"w-96 h-96 border border-gray-400 bg-yellow-200 m-4" +(!theme &&  "bg-red-400")}>
      <input
        type="number"
        className="border border-red-400 p-2 m-2"
        value={number}
        placeholder="Enter your Number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1 className="font-bold text-xl">{prime}</h1>
      <button
        className="p-4 m-4 rounded-lg bg-green-300"
        onClick={() => {
          setTheme(!theme);
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default DemoCode2;
