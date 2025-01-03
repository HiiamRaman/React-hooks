import { useState } from 'react'

import './App.css'

function App() {
 const [inputname,setInputname] =useState("Raman ")
 
console.log(inputname)
 function handler(e){
  setInputname(e.target.value);

 }
  return  (
    
   <div>


    <h1>{inputname}</h1>

    <input type ="text"  value= {inputname}  placeholder='Type your name here...' onChange={handler}/>
   </div>
  )
}

export default App
