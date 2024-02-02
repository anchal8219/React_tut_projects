import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let c=16;
  const add = ()=>{
    console.log("clicked",Math.random());
    c = c+1;
  }

  return (
    <>
      
      <h1>Counter value: {c}</h1>
        <button onClick={add}>Add value
        </button>
        <br/>
        <button>Remove value
        </button>
        
    </>
  )
}

export default App
