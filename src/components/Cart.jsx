import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Cart = () => {
  return (
    <div className='mensaje'>
    <Alert
  status='error'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
  width='35%'
  borderRadius="md"
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Tu carrito esta vacio
  </AlertTitle>
  <Link to={"/"}>
  <AlertDescription maxWidth='sm'>
    Ven a comprar ahora!
  </AlertDescription>
  </Link>
</Alert>
</div>
  )
}

export default Cart