/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import getPrime from "../utils/getPrime";

const DemoCode2 = () => {
  const [number, setNumber] = useState(0);
  const [toggleTheme, setToggleTheme] = useState(true); // true == yellow , false = blue

  console.log("Component Rendered");
  const prime = useMemo(() => {
    return getPrime(number);
  }, [number]); // this implies to cache the result of calcultaion bw renders , as a result when a number is not chnaged the function is not called again because of state chnage of some other state variable , i.e in such case use cached value
  return (
    <div
      className={`p-2 m-5 border border-gray-700 w-96 h-96 ${
        toggleTheme ? "bg-yellow-300" : "bg-blue-300"
      }`}
    >
      <input
        type="number"
        placeholder="Enter your number"
        className="p-2 border border-red-500 rounded-lg"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>The prime nth prime number is: {prime}</h1>
      <button
        className="rounded-lg p-2 m-2 font-bold bg-red-400"
        onClick={() => {
          setToggleTheme(!toggleTheme);
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default DemoCode2;
