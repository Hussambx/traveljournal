import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Cards from "./components/Cards"
import data from "./assets/data"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <Header/>
  <Cards/>
  </div>
  )
}

export default App
