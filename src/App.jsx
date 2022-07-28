import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Cards from "./components/Cards"
import data from "./assets/data"
function App() {
  const [count, setCount] = useState(0)
 const carddata = data.map(travel=>{
  return(
    <Cards
   title ={travel.title}
   location ={travel.location}
   googleMapsUrl ={travel.googleMapsUrl}
   startDate ={travel.startDate}
   endDate = {travel.endDate}
   description = {travel.description}
   img = {travel.imageUrl}
  />
  )
  

 })

  return (
    <div>
  <Header/>
  {carddata}
  </div>
  )
}

export default App
