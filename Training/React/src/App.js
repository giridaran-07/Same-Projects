import React from 'react';  
import './App.css';   
function verify(props)
{
  var a=document.getElementById('n').value;
  var b=document.getElementById('p').value;
  if(a===b)
  alert("asdf");
  else
  alert("ddddd");
  console.log("asdf");
} 
function App() {  

  return (  
    <div className="container">      
     <h1 className='names'>E-mail</h1>
     <input type="name" className='names' id='n'></input>
     <h1 className='passs'>Password</h1>
     <input type="password"className='passs' id='p'></input>
     <br></br>
     <button type='button' className='button' onClick={verify}>submit</button>
    </div>  
  );  
}  

export default App;  