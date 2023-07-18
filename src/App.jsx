import React from 'react'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer 
      greeting="Barriguita llena, Corazon contento =)"
      />
    </>
  )
}

export default App