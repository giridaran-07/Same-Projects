import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Usestate() {
    const [color,setColor]=useState("red");
  return (
    <div>
       <h1>My favourite color is {color}</h1>
       <button color="red" onClick={()=>setColor("blue")}>blue</button>
       <button color="red" onClick={()=>setColor("green")}>green</button>
       <button color="red" onClick={()=>setColor("yellow")}>yellow</button>
       <button color="red" onClick={()=>setColor("orange")}>orange</button>
    </div>
  )
}

export default Usestate;
