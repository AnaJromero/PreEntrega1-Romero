import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/category/:category" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>

      </BrowserRouter>
  )
}

export default App