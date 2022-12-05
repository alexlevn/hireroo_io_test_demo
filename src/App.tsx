import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(1)
  return (
    <>
      <p id="like-count">{count}</p>
      <button id="like-button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  )
}

export default App
