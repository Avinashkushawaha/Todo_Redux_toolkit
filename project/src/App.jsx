import { useState } from 'react'
import Todos from './components/Todos'
import './App.css'
import Addtodo from './components/Addtodo'


function App() {


  return (
    <>
     <h1>Learn Redux Toolkit</h1>
     <Addtodo/>
     
     <Todos/>
      
    </>
  )
}

export default App
