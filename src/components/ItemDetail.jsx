import { Heading, Card, CardHeader, CardBody, CardFooter, Text, Center} from '@chakra-ui/react';
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ItemCount from './ItemCount';

const ItemDetail = ({ productos }) => {
    const { id } = useParams();

    const filteredProducts = productos.filter((producto) => producto.id === id)
  return (
    <div>
        {filteredProducts.map((p) => {
            return (
                <div key={p.id}>
                    <Center p="1rem">
                        <Card>
                            <CardHeader>
                                <Heading size="md">{p.nombre}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{p.descripcion}</Text>
                                <Text>{p.category}</Text>
                            </CardBody>
                            <CardFooter>
                                <ItemCount/>
                            </CardFooter>
                        </Card>
                    </Center>
                </div>
                )
            })}
    </div>
    )
}


export default ItemDetail