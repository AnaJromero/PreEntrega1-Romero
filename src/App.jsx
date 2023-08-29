import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contex/CartContext';

import Navbar from './components/NavBar';
import ItemListContainer from 'c:/Users/ana_j/Desktop/YellowTruck/src/components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Loader from './components/Loader';

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path ="/" element={<ItemListContainer/>}/>
            <Route exact path="/categoria/:categoria" element={<ItemListContainer/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/checkout" element={<Checkout/>}/>
          </Routes>
          <Loader/>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;