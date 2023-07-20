import React from 'react'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import UseEffect from './components/UseEffect'

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer 
      greeting="Barriguita llena, Corazon contento =)"
      />
      <UseEffect/>
    </>
  )
}

export default App