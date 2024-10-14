import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <h1>Hello world</h1>
      <h2>Clicks: {count}</h2>
      <button onClick={() => setCount(count+1)}></button>
    </>
  )
}

export default App
