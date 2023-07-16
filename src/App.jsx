import React from 'react'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer 
      greeting="Bienvenidos a mi tienda"
      />
    </>
  )
}

export default App