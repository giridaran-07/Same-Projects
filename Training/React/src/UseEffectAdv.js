import { useEffect, useState } from "react";
import React from "react";
export default function UseEffectAdv() {
    const [count,setCount]=useState(0);
    const [calculation,setCalculation]=useState(0);
    useEffect(()=>{
        setCalculation(()=>count*2);
    },[count]);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount((e)=>e+1)}>Click</button>
        <h1>{calculation}</h1>
    </div>
  )
}
