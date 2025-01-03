import { useEffect, useState } from 'react'

import './App.css'

function App() {
 const [inputname,setInputname] =useState("Raman")
 const[increase,setIncrease]=useState(0)
 const[decrease,setDecrease]=useState(0)
console.log(increase,decrease)
 // below code for useState
// console.log(inputname)
 function handler(e)
{
  setInputname(e.target.value);

 }

//below codes for useEffect
useEffect(() => {
  
console.log("Raman")
alert("yo  !!! ")
}, [increase,decrease]);

function incremental(){
setIncrease(increase+1);
}
function decremental(){
setDecrease(decrease-1)
}

  return  ( <div>

   {/* Explaination of useSate hook */}
    
    <div>
 
 
     <h1>{inputname}</h1>
 
     <input type ="text"  value= {inputname}  placeholder='Type your name here...' onChange={handler}/>
    </div>
 
    {/* EXPLAINNATION OF USEEFFECT HOOK */}



    <button onClick={incremental}> Increment{increase} </button>
    <button onClick={decremental}> Decrement {decrease}</button>






  </div>

   
     

  )
}

export default App
