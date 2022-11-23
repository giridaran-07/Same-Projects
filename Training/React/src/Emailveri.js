import React, { useState } from 'react'

export default function Emailveri() {
    const [email,setEmail]=useState("");
    const [Message,setMessage]=useState("");
    const handleOnchange=(e)=>{
        setEmail(e.target.value);
    }
    const verifyEmail=()=>{
        const ref=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(ref.test(email)){
            setMessage("Valid Email");
        }
        else if(!ref.test(email) || email==" "){
            setMessage("Not a valid email");
        }
    }
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "50px",
        fontFamily: "Arial"
      };
  return (
    <div style={mystyle}>
        <label style={{color:'orange'}}>Email</label>
        <input type={email} onChange={handleOnchange} placeholder="email" style={{backgroundColor: "lightblue"}}></input>
        <button onClick={verifyEmail}>Verify</button>
        <span style={mystyle}>
        {Message}
        </span>
    </div>
  )
}
