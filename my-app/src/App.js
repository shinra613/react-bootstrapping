import logo from './logo.svg'
import React from 'react'
import './App.css'
import user from './user'

function App() {
  return (
    <div className="App">
     
      {user({
        name: "Akhil",
        role: "father"
      })}
      {user({
        name: "Aiswarya",
        role: "mother"
      })}
      {user({
        name: "Shinra",
        role: "son"
      })}
      
    </div>
  )
}

export default App
