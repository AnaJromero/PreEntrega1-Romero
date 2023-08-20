import { FormControl, FormLabel, Button, ButtonGroup, Input } from '@chakra-ui/react';
import { useForm } from "react-hook-form";

const Contacto = () => {
    const { register, handleSubmit } = useForm();
    const enviar = (data) => {
        console.log("data");
    }
 
    return (
    
    <div>
        <FormControl isRequired onSubmit={handleSubmit(enviar)}>
            <FormLabel>Nombre y Apellido</FormLabel>
            <Input type='text' placeholder='Ingresa tu nombre'{...register("nombre")}/>
        </FormControl>
        <FormControl>
            <FormLabel>Correo Electronico</FormLabel>
            <Input type='email' placeholder='Ingresa tu e-mail'{...register("email")}/>
        </FormControl>
        <FormControl>
            <FormLabel>Telefono</FormLabel>
            <Input type='phone' placeholder='Ingresa tu telefono'{...register("telefono")}/>
        </FormControl>
        <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue'>Enviar</Button>
            <Button>Cancelar</Button>
        </ButtonGroup>
    </div>
  )
}
export default Contacto;