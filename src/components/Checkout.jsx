import React, { useContext, useState } from 'react'
import { CartContext } from '../contex/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import {useForm} from 'react-hook-form';

const Checkout = () => {
    const [pedidoId, setPredidoId] = useState("");
    const { carrito, setCarrito} = useContext(CartContext);
    const { register, handleSubmit} = useForm();
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);
        const pedidoRef = collection(db, "pedido");

        addDoc(pedidoRef,pedido)
            .then((doc) =>{
                setPredidoId(doc.id);
                vaciarCarrito();
        })
    }

    if (pedidoId){
        return(
            <div>
                <h1>Muchas Gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }
  return (
    <div>
        <h1>Finalizar Compra</h1>
        <form onSubmit={handleSubmit(comprar)}>
            <input type='text' placeholder='Ingresa tu nombre'{...register("nombre")}/>
            <input type='email' placeholder='Ingresa tu e-mail'{...register("email")}/>
            <input type='phone' placeholder='Ingresa tu telefono'{...register("telefono")}/>

            <button type='submit'>Comprar</button>
        </form>
    </div>
  )
}

export default Checkout