import Navbar from './components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './components/Contacto';
import Cart from './components/Cart';
import { CartContext } from './contex/CartContext';
import { useState } from 'react';
import Checkout from './components/Checkout';

const App = () => {

const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, count) => {
    const productoAgregado = {...item, count};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) =>producto.id === productoAgregado.id);

    if (estaEnElCarrito) {
      estaEnElCarrito.count += count;
    }else{
      nuevoCarrito.push(productoAgregado);
    }
    setCarrito(nuevoCarrito);
  }

    const cantidadEnCarrito = () => {
    return carrito.reduce((acc,producto) => acc + producto.count,0)  
  }

  return (
    <div>
      <CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEnCarrito} }>
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

        </BrowserRouter>
        </CartContext.Provider>
    </div>
  )
}

export default App;