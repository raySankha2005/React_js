import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addVal=()=>{
    if(counter<20)
    {
      setCounter(counter+1)
    }
    else
    {
      return
    }
  }
  const removeVal=()=>{
    if(counter>0)
    {
      setCounter(counter-1);
    }
  }

  return (
    <>
    <h1>RICK IS REACTING</h1>
    <h2>Counter value:{counter}</h2>
    <br />
    <button onClick={addVal}>Add Value{counter}</button>
    <br />
  <button onClick={removeVal}>Remove Value{counter}</button>  
    </>
  )
}

export default App
