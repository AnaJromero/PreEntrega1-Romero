import { useContext } from 'react'
import { CartContext } from '../contex/CartContext'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const Cart = () => {
  const { carrito, vaciarCarrito, precioTotal, eliminarDelCarrito} = useContext(CartContext);
  
  const handleVaciar = () => {
    vaciarCarrito();
  };

  const handleEliminar = (itemId) => {
    eliminarDelCarrito(itemId);
  };
  
  return (
    <>
      <h1 className='titulo'>Carrito</h1>

      {carrito.length > 0 ? (
        <div  className='carrito-total'>
          {carrito.map((producto) => (
            <div className='container-carrito' key={producto.id}> 
              <br/>
              <img className='carrito-imagen' src={producto.imagen} alt={producto.titulo} />
              <h2>{producto.titulo}</h2>
              <p>${producto.precio}</p>
              <p>{producto.count}</p>
              <p>${producto.precio * producto.count}</p>
              <Button className='boton-eliminar' onClick={() => handleEliminar(producto.id)}>Eliminar</Button>
              <br/>
            </div>
          ))}
          <h2> Total: ${precioTotal()}</h2>
          <Button className='carrito-vaciar' colorScheme='teal' variant='outline'onClick={handleVaciar}>
            Vaciar Carrito
          </Button>
          <Button colorScheme='teal' variant='solid'>
            <Link to="/checkout">Comprar</Link>
          </Button>  
        </div>
      ) : (
        <h2 className='container-form' >El Carrito Esta Vacio</h2>
      )}
    </>
  );
};

export default Cart;

    