import { Heading, Card, CardHeader, CardBody, CardFooter, Text, Center} from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ( { item }) => {
    
    return (
        <div>
            <Center p="1rem">
                <Card>
                    <CardHeader>
                        <Heading size="md">{item.titulo}</Heading>
                    </CardHeader>
                    <CardBody>
                        <img src={item.imagen} alt={item.titulo} />
                        <Text>{item.detalle}</Text>
                        <Text>Precio: ${item.precio}</Text>
                    </CardBody>
                    <CardFooter>
                        <ItemCount item={item} key={item.id} />
                    </CardFooter>
                </Card>
            </Center>
        </div>
    )
}


export default ItemDetail;