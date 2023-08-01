import { Button, Spacer } from '@chakra-ui/react';
import{useState} from 'react'


const ItemCount = () => {

  const [contador,setContador] = useState(0);

    const agregarItem = ()=>{
        if (contador < 10){
            setContador(contador + 1);
        }
    };

    const quitarItem =()=>{
        if (contador > 0){
            setContador(contador - 1)
        }
    };

    const vaciarCarrito = ()=> {
        setContador(0);
    };

  return (
    <>
        <Button onClick={quitarItem}>-</Button>
        <Spacer/>
        <p>{contador}</p>
        <Spacer/>
        <Button onClick={agregarItem}>+</Button>
        <Button onClick={vaciarCarrito}>Eliminar</Button>
    </> 
  );
}
export default ItemCount