import { useState } from 'react'
import './App.css'

function App() {
  let [count,setcount]=useState(10)

  const addval = ()=>{
    if(count<20){
      count++
      setcount(count)
    }
    
  }

  const reval=()=>{
    if(count>0){
      count--
      setcount(count)
    }
  }

  return (
    <>
    <h1>FIRST PROJECT</h1>
    <h2>COUNTER {count}</h2>
    <button onClick={addval}>Add {count}</button>
    <button onClick={reval}>Remove {count}</button>
    <footer>value:  {count}</footer>
    </>
  )
}

export default App
