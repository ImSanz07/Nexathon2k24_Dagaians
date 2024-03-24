import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventPage from './components/EventPage'
import ImageGenerator from './components/EventPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ImageGenerator/>     
    </>
  )
}

export default App
