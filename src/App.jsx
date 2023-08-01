import React from 'react'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import ItemCount from './components/ItemCount'

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer 
      />
      <ItemCount/>
    </>
  )
}

export default App