import{ useContext, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { CartContext } from '../contex/CartContext';
                                                        
const ItemCount = ({ item }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const agregarItem = () => setCount(count < 10 ? count + 1 : count);

  const quitarItem = () => setCount(count > 1 ? count - 1 : count);

  return (
    <div className='contador'>
        <Button onClick={quitarItem}>-</Button>
        <p className='contador-numero'>{count}</p>
        <Button onClick={agregarItem}>+</Button>
        <br/>
        <Button className='agregar' onClick={() => agregarAlCarrito(item, count)}>Agregar al Carrito</Button>
    </div> 
  );
}

export default ItemCount;