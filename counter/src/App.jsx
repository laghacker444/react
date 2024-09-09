import { useState } from 'react'
import './App.css'

function App() {
  let [count,setcount]=useState(10)


/*if we use count+1 inside setcount it will only work one time 
no matter how many times we give command as it is because it is fibre and fibre works in batches 
and do similar works one time only with the help of callback (count=>count+1) 
we can fetch the latest value of count and increase it how many times we want by giving calls*/

  const addval = ()=>{
    if(count<20){
      setcount(count=>count+1)    
      setcount(count=>count+1)
      console.log(count)
      
    }
    
  }

  const reval=()=>{
    if(count>0){
      setcount(count=>count-1)
      setcount(count=>count-1)
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
