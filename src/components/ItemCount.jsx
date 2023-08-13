import { Button } from '@chakra-ui/react';
import{ useState } from 'react'

const ItemCount = () => {

  const [contador,setContador] = useState(1);

    const agregarItem = ()=>{
        if (contador < 10){
            setContador(contador + 1);
        }
    };

    const quitarItem =()=>{
        if (contador > 1){
            setContador(contador - 1)
        }
    };

    const agregarAlCarrito = ()=> {
      setContador(1);
  };

  return (
    <>
        <Button onClick={quitarItem}>-</Button>
        <p>{contador}</p>
        <Button onClick={agregarItem}>+</Button>
        <br/>
        <Button onClick={agregarAlCarrito}>Agregar al Carrito</Button>
    </> 

  );
}

export default ItemCount;