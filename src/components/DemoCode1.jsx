import { current } from "@reduxjs/toolkit";
import React from "react";
import { useState } from "react";
import { useRef } from "react";

const DemoCode1 = () => {
  const y = useRef(0);
  const [statevaribale, setStateVariable] = useState(0);
  let x = 0;
  console.log("Component Rendered");
  return (
    <div className="w-96 h-96 border border-gray-400 display flex flex-col">
      <button
        className="p-2 m-2 bg-green-300 w-1/2 rounded-lg font-bold"
        onClick={() => {
          setStateVariable(statevaribale + 1);
        }}
      >
        State increase = {statevaribale}
      </button>

      <button
        className="p-2 m-2 bg-blue-300 w-1/2 rounded-lg font-bold"
        onClick={() => {
          x = x + 1;
          console.log("local variable:"+x); // this wont trigger re-render on Update , if state variable is changed it will re-render the component as result the variable will be set to 0 , because function is called again and new FEC is created
        }}
      >
        value of local ={x}
      </button>

      {/*How to create an variable which persists its value , but does not re-render ==> useRef */}
      <button className="p-2 m-2 bg-red-300 w-1/2 rounded-lg font-bold " onClick={()=>{
        y.current=y.current+1
        console.log("useRef variable:"+y.current)
      }}>UseRef Variable ={y.current}</button>
    </div>
  );
};

export default DemoCode1;
