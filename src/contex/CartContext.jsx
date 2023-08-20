import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);
    const agregarAlCarrito = (item, count) => {
        const productoAgregado = {...item, count};

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) =>producto.id === productoAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.count += count;
          }else{
            nuevoCarrito.push(productoAgregado);
          }
          setCarrito(nuevoCarrito);
        }
        const cantidadEnCarrito = () => {
            return carrito.reduce((acc,producto) => acc + producto.count,0);  
    }

    const precioTotal = () => {
        return carrito.reduce((acc, producto) => acc + producto.precio * producto.count,0);

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
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>
    )
}