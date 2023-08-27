import Navbar from './components/NavBar';
import ItemListContainer from 'c:/Users/ana_j/Desktop/YellowTruck/src/components/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './components/Contacto';
import Cart from './components/Cart';
import { CartProvider } from './contex/CartContext';
import Checkout from './components/Checkout';
import Loader from './components/Loader';

                                    /* ANA NO TOQUES LA APP YA QUEDO LISTA  */
const App = () => {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route exact path ="/" element={<ItemListContainer/>}/>
            <Route exact path="/categoria/:categoria" element={<ItemListContainer/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
            <Route exact path="/contacto" element={<Contacto/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/checkout" element={<Checkout/>}/>
          </Routes>
          <Loader/>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;