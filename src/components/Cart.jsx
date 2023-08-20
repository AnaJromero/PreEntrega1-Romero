import { useContext } from 'react'
import { CartContext } from '../contex/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  }
  return (
    <>
      <h1>Carrito</h1>

    {
      carrito.map((producto) => (
        <div> 
          <br/>
          <h2>{producto.titulo}</h2>
          <p>${producto.precio}</p>
          <p>${producto.precio * producto.cantidad}</p>
          <p>{producto.cantidad}</p>
          <br/>
        </div>
      ))
    }
    {
      carrito.length > 0 ?
      <>
        <h2>Precio Total: ${precioTotal()}</h2>
        <button onClick={handleVaciar}>Vaciar</button>
        <Link to="/checkout">Finalizar Compra</Link>
      </>:
        <h2>El Carrito Esta Vacio</h2>
    }
    </>
  )
}

export default Cart;