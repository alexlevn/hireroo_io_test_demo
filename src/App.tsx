import React, { useState } from 'react'
import './App.css'

// TODO: Please implement this component.
const App = () => {
  const [count, setCount] = useState(1)
  return (
    <button id="like-button" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  )
}

export default App
