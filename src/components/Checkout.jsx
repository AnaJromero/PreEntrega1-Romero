import React, { useContext, useState } from 'react'
import { CartContext } from '../contex/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {useForm} from 'react-hook-form';
import { Button, AlertIcon, Alert, AlertTitle, AlertDescription } from '@chakra-ui/react';

const Checkout = () => {
    const [pedidoId, setPredidoId] = useState("");
    const { carrito, vaciarCarrito, precioTotal, eliminarDelCarrito} = useContext(CartContext);
    const { register, handleSubmit} = useForm();
    
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
    const db = getFirestore()
    const pedidoRef = collection(db, "Carrito");

    addDoc(pedidoRef,pedido)
        .then((doc) =>{
            setPredidoId(doc.id);
            vaciarCarrito();
        });
    };

    if (pedidoId){
        return(
            <div   className='mensaje'>
                <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    width='300px'
                >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Su Compra fue exitosa
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Tu numero de pedido es: {pedidoId}
                    </AlertDescription>
                </Alert>
            </div>
        );
    };

  return (
    <div className='contenedor-form' >
        <h1>Finalizar Compra</h1>
        <form className='container-form' onSubmit={handleSubmit(comprar)}>
            <div>
                <input type='text' placeholder='Ingresa tu nombre'{...register("nombre")}/>
            </div>
            <div>
                <input type='email' placeholder='Ingresa tu e-mail'{...register("email")}/>
            </div>
            <div>
                <input type='password' placeholder='Ingresa tu Clave'{...register("clave")}/>
            </div>
            <Button className='comprar' colorScheme='teal' variant='solid' type='submit'>Comprar</Button>
        </form>
    </div>
    );
};

export default Checkout;
