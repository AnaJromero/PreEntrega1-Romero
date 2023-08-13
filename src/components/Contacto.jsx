import { FormControl, FormLabel, Button, ButtonGroup, Input } from '@chakra-ui/react';
import { useForm } from "react-hook-form";

const Contacto = () => {
    const { handleSubmit } = useForm();
    const enviar = () => {
        console.log("Enviado");
    }
 
    return (
    
    <div>
        <FormControl isRequired onSubmit={handleSubmit(enviar)}>
            <FormLabel>Nombre y Apellido</FormLabel>
            <Input
                type="text"
                placeholder='Nombre y Apellido'
                />
        </FormControl>
        <FormControl>
            <FormLabel>Correo Electronico</FormLabel>
            <Input 
            type='email'
            placeholder='Correo Electronico' 
            />
        </FormControl>
        <ButtonGroup variant='outline' spacing='6'>
            <Button colorScheme='blue'>Enviar</Button>
            <Button>Cancelar</Button>
        </ButtonGroup>
    </div>
  )
}
export default Contacto;