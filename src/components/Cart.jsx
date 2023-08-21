import { useContext } from 'react'
import { CartContext } from '../contex/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {

  const { carrito, vaciarCarrito, precioTotal} = useContext(CartContext);
 /*  const handleVaciar = () => {
    vaciarCarrito();
  } */
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
          <p>${producto.precio * producto.count}</p>
          <p>{producto.count}</p>
          <br/>
        </div>
      ))
    }
    </>
  )
}

export default Cart;

   /*  {
      carrito.length > 0 ?
      <>
        {/* <h2>Precio Total: ${precioTotal()}</h2> 
        <button onClick={handleVaciar}>Vaciar</button>
        z
      </>:
        <h2>El Carrito Esta Vacio</h2>
    */