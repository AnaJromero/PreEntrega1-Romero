import { useContext } from 'react'
import { CartContext } from '../contex/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {

  const { carrito, vaciarCarrito, precioTotal, eliminarDelCarrito} = useContext(CartContext);
  
  const handleVaciar = () => {
    vaciarCarrito();
  }
  const handleEliminar = (itemId) => {
    eliminarDelCarrito(itemId);
  };
  
  return (
    <>
      <h1>Carrito</h1>

    {
      carrito.map((producto) => (
        <div key={producto.id}> 
          <br/>
          <h2>{producto.titulo}</h2>
          <img src={producto.imagen} alt={producto.titulo} />
          <p>${producto.precio}</p>
          <p>{producto.count}</p>
          <p>${producto.precio * producto.count}</p>
          <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
          <br/>
        </div>
      ))
    }
    {
        carrito.length > 0 ?
        <>
          <h2>Precio Total: ${precioTotal()}</h2> 
          <button onClick={handleVaciar}>Vaciar</button>
          <Link to="/checkout">Comprar</Link>
        </>:
          <h2>El Carrito Esta Vacio</h2>
    }
    </>
  )
}

export default Cart;

    