import { useState } from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import './App.css'
import data from './data'

function App()
{
  let cards = data.map((item) =>
  {
    return (
      <Card
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    )
  })
  return (
    <>

      <div>
        <Navbar />
        {cards}
      </div>
    </>
  )
}

export default App
