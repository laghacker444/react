import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-5 shadow-2xl bg-slate-50 px-3 py-1 rounded-2xl">
            <button className='outline-none text-white shadow-2xl rounded-xl px-2 py-1 ' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button className='outline-none text-white shadow-2xl rounded-xl px-2 py-1 ' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button className='outline-none text-white shadow-2xl rounded-xl px-2 py-1 ' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
            <button className='outline-none text-white shadow-2xl rounded-xl px-2 py-1 ' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
            <button className='outline-none text-white shadow-2xl rounded-xl px-2 py-1 ' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
            <button className='outline-none text-white shadow-2xl rounded-xl px-2 py-1 ' style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>Brown</button>
            <button className='outline-none text-white shadow-2xl rounded-xl px-2 py-1 ' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
