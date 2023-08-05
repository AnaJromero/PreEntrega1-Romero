import { Heading, Card, CardHeader, CardBody, CardFooter, Text, Center} from '@chakra-ui/react';
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';

const ItemDetail = ({ articulos }) => {
    const { id } = useParams();

    const filtrarArt = articulos.filter((articulo) => articulo.id == id)
  return (
    <div>
        {filtrarArt.map((a) => {
            return (
                <div key={a.id}>
                    <Center p="1rem">
                        <Card>
                            <CardHeader>
                                <Heading size="md">{a.titulo}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{a.detalle}</Text>
                                <Text>{a.precio}</Text>
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