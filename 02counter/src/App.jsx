import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let c=16;
  let [c,setC] = useState(17)
  const add = ()=>{
    // console.log("clicked",c);
    // c = c+1;
    if(c<20)
    setC(c+1);
  }

  const sub=()=>{
    if(c>0)
    setC(c-1);
    // else break;
  }

  return (
    <>
      
      <h1>Counter value: {c}</h1>
        <button onClick={add}>Add value
        </button>
        <br/>
        <button onClick={sub}>Remove value
        </button>
        
    </>
  )
}

export default App
