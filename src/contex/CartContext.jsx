import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
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
    };

    const eliminarDelCarrito = (itemId) => {
        const productoEliminado = carrito.filter((producto) => producto.id !== itemId);
        setCarrito(productoEliminado);
    };

    const vaciarCarrito = () => {
        setCarrito ([]);
    };

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc,producto) => acc + producto.count,0); 
    };

    const precioTotal = () => {
        return carrito.reduce((acc, producto) => acc + producto.precio * producto.count,0);
    };

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
    }}
    >
        {children}
    </CartContext.Provider>
    );
};