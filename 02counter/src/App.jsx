import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Count, setCount] = useState(0)

  // let Count = 5;

  const addValue = () =>{
    // setCount(Count + 1)
    if (Count < 20) {
      setCount(preCount => preCount + 1)
      setCount(preCount => preCount + 1)
      setCount(preCount => preCount + 1)
      setCount(preCount => preCount + 1)
    }
  }

  const removeValue = () =>{
    // setCount(Count -1)
    if (Count > 0) {
      setCount(preCount => preCount - 1)
    }
  }
  
  return (
    <>
      <h1>Code or react</h1>
      <h2>Counter value: {Count}</h2>

      <button 
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
