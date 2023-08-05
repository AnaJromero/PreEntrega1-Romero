import React from 'react'
import { Alert, AlertTitle } from '@chakra-ui/react'

const Home = () => {
  return (
    <div className='mensaje'>
    <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
  width='35%'
  borderRadius="md"

>
  <AlertTitle mt={4} mb={1} fontSize='lg'>
  Bienvenidos a nuestro FoodTruck OnLine
  </AlertTitle>
</Alert>
</div>
  )
}

export default Home