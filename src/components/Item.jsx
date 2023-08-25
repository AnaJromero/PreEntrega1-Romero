import { CardFooter, Card, CardBody,CardHeader, Heading, Button, SimpleGrid} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="contenedor" templateColumns='repeat(5, minmax(200px, 1fr))'>
  <Card key={producto.id}>
    <CardHeader>
      <Heading className="titulo" size='md'>{producto.titulo}</Heading>
    </CardHeader>
    <CardBody>
    <img className="imagen" src={producto.imagen} alt={producto.titulo} />
    </CardBody>
    <CardFooter className="card-footer">
    <p>Precio: ${producto.precio} </p>
            <Button>
              <Link to={`/item/${producto.id}`}>
                Ver mas
              </Link>
            </Button>
    </CardFooter>
  </Card>
</div>
      
  )
};

export default Item;
{/* <Card className="cardContainer" key={producto.id}>
<CardHeader>
  <Heading>{producto.titulo}</Heading>
</CardHeader>
<CardBody>
  <img src={producto.imagen} alt={producto.titulo} />
</CardBody>
<CardFooter>
  <p>Precio: ${producto.precio} </p>
  <Button>
    <Link to={`/item/${producto.id}`}>
      Ver mas
    </Link>
  </Button>
</CardFooter>
</Card> */}