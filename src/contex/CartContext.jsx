import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carritoInicial);

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);
   
    const agregarAlCarrito = (item, count) => {
        const nuevoCarrito = [...carrito];
        const productoAgregado = nuevoCarrito.find(

            (producto) => producto.id === item.id
        );

        if(productoAgregado){
            productoAgregado.count += count;

        }else{
            nuevoCarrito.push({ ...item, count});
        }
        setCarrito(nuevoCarrito);
        /* const productoAgregado = {...item, count};
        console.log(productoAgregado);

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) =>producto.id === productoAgregado.id);
        console.log(estaEnElCarrito)

        if (estaEnElCarrito) {
            estaEnElCarrito.count += count;
          }else{
            nuevoCarrito.push(productoAgregado);
          }
          setCarrito([...nuevoCarrito, productoAgregado]) */
          
        } 
        const cantidadEnCarrito = () => {
            return carrito.reduce((acc,producto) => acc + producto.count,0);  
           
    }

    const precioTotal = () => {
        return carrito.reduce((acc, producto) => acc + producto.precio * producto.count,0);

    }

  /*   const quitarItem =()=>{
        if (count > 1){
            setCount(count - 1)
        }
    }; */
   const eliminarDelCarrito = (itemId) => {
        const productoEliminado = carrito.filter((producto) => producto.id !== itemId);
        setCarrito(productoEliminado);
    }
    const vaciarCarrito = () => {
        setCarrito ([]);
    }
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    },[carrito])
 return(
    <CartContext.Provider value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
        eliminarDelCarrito
    }}>
        {children}
    </CartContext.Provider>
    )
}