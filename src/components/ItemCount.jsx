import { Button } from '@chakra-ui/react';
import{ useContext, useState } from 'react'
import { CartContext } from '../contex/CartContext';
                              


                                         /* ANA NO TOCAR ESTO YA FUNCIONA */


                                         
const ItemCount = ({item}) => {

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
    <div className='contador'>
        <Button onClick={quitarItem}>-</Button>
        <p className='contador-numero'>{count}</p>
        <Button onClick={agregarItem}>+</Button>
        <br/>
        <Button className='agregar' onClick={() => {agregarAlCarrito(item, count)}}>Agregar al Carrito</Button>
    </div> 

  );
}

export default ItemCount;