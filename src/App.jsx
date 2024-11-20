import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordian from './components/accordian'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Accordian/>
    </>
  )
}

export default App
