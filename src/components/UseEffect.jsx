import{useState} from 'react'

const UseEffect = () => {
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
    <div>
        <p>{contador}</p>
        <button onClick={agregarItem}>Agregar</button>
        <button onClick={quitarItem}>Quitar</button>
        <button onClick={vaciarCarrito}>Eliminar</button>
    </div>
  );
}

export default UseEffect