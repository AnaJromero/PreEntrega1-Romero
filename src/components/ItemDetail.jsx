import { Heading, Card, CardHeader, CardBody, CardFooter, Text, Center} from '@chakra-ui/react';
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const { id } = useParams();
    
    const filtrarArt = item.filter((producto) => producto.id == id)
    return (
        <>
            {filtrarArt.map((producto) => {
                return (
                    <div key={producto.id}>
                        <Center p="1rem">
                            <Card>
                                <CardHeader>
                                    <Heading size="md">{producto.titulo}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <img src={producto.imagen}/>
                                    <Text>{producto.detalle}</Text>
                                    <Text>Precio: ${producto.precio}</Text>
                                </CardBody>
                                <CardFooter>
                                    <ItemCount/>
                                </CardFooter>
                            </Card>
                        </Center>
                    </div>
                )
            })}
        </>
    )
}


export default ItemDetail;