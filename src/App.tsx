import React, { useState } from 'react'
import './App.css'

// TODO: Please implement this component.
// function App() {
//   return (
//     <div className="App">
//       <h1>LIKE App - test commit</h1>
//     </div>
//   )
// }

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

// const Test = () => {
//   const [count, setCount] = useState(1)
//   return (
//     <>
//       <p id="like-count">{count}</p>
//       <button id="like-button" onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </>
//   )
// }
