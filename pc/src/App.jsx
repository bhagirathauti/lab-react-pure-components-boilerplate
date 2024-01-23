import { useState } from 'react'
import './App.css'
import SimpleCounterComponent from "./Components/SimpleCounterComponent"
import PureCounterComponent from './Components/PureCounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleCounterComponent/>
      <PureCounterComponent/>
    </>
  )
}

export default App
