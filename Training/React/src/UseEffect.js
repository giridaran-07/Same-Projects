import { useEffect,useState } from "react";
import React from "react";

export default function UseEffect() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setCount((count)=>count+1);
            console.log("timer");
        }, 1000);
    },[]);
  return (
    <div>
        {console.log("render")}
        <h1>I have rendered {count} times</h1>
    </div>
  )
}
