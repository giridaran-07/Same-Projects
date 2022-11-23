import React from 'react'

export default function Bubbling() {
    
  return (
    <div onClick={()=>{console.log("outer")}}>
        <div onClick={()=>{console.log("inner")}} >
            Hello dhanish
        </div>
    </div>
  )
}
