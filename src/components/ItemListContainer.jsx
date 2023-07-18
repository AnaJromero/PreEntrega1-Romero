import React from 'react'
import { Container } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <Container className='mensaje' maxW='md' bg='#faebd7' color='black'>
      <p>{greeting}</p>
    </Container>
  )
}

export default ItemListContainer