import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage';

function App() {
  const [funds, setFunds] = useState(123)

  return (
    <>
      <Homepage />
      <Homepage />
      <Homepage />
      <Homepage />
      <Homepage />
    </>
  )
}

export default App
