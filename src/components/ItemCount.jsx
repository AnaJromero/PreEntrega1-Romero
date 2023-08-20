import { Button } from '@chakra-ui/react';
import{ useContext, useState } from 'react'
import { CartContext } from '../contex/CartContext';

const ItemCount = ({producto}) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [count, setCount] = useState(1);

    const agregarItem = ()=>{
        if (count < 10){
            setCount(count + 1);
        }
    };

    const quitarItem =()=>{
        if (count > 1){
            setCount(count - 1)
        }
    };

  return (
    <>
        <Button onClick={quitarItem}>-</Button>
        <p>{count}</p>
        <Button onClick={agregarItem}>+</Button>
        <br/>
        <Button onClick={() => {agregarAlCarrito(producto, count)}}>Agregar al Carrito</Button>
    </> 

  );
}

export default ItemCount;