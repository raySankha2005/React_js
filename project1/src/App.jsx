import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
     <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center gap-2 bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-400 rounded-2xl px-2 py-2 font-bold text-white-950'>
          <button onClick={()=>setColor("yellow")}>Yellow</button>
        </div>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-purple-400 rounded-2xl px-2 py-2 font-bold text-white-950'>
          <button onClick={()=>setColor("purple")}>Purple</button>
        </div>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-green-400 rounded-2xl px-2 py-2 font-bold text-white-950'>
          <button onClick={()=>setColor("green")}>Green</button>
        </div>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-orange-400 rounded-2xl px-2 py-2 font-bold text-white-950'>
          <button onClick={()=>setColor("yellow")}>Orange</button>
        </div>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-red-400 rounded-2xl px-2 py-2 font-bold text-white-950'>
          <button onClick={()=>setColor("red")}>Red</button>
        </div>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-blue-700 rounded-2xl px-2 py-2 font-bold text-white-950'>
          <button onClick={()=>setColor("blue")}>Blue</button>
        </div>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-cyan-400 rounded-2xl px-2 py-2 font-bold text-white-950'>
          <button onClick={()=>setColor("cyan")}>Cyan</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
