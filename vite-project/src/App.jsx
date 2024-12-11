import { useState } from 'react'
import './App.css'
import { Navbar } from './pages/Navbar'
import Sendmails from './pages/Sendmails'
import { ToastContainer, toast } from "react-toastify";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Sendmails />
      <p>React + Vite project</p>
      <ToastContainer />
    </>
  )
}

export default App
