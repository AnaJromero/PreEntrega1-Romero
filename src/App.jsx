import Navbar from './components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './components/Contacto';
import { useState } from 'react';
import Carrito from './components/Carrito';
import { CartContext } from './contex/CartContext';
import Cart from './components/Cart';

const App = () => {

/*   const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item,cantidad) => {
    const productoAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) =>producto.id === productoAgregado.id);

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    }else{
      nuevoCarrito.push(productoAgregado);
    }
    setCarrito(nuevoCarrito);
  }
 */
  return (
    <div>
        <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route exact path ="/" element={<ItemListContainer/>}/>
            <Route exact path="/categoria/:categoria" element={<ItemListContainer/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
            <Route exact path="/contacto" element={<Contacto/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
          </Routes>

        </BrowserRouter>
    </div>
  )
}

export default App;