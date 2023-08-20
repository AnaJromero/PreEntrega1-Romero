import { CardFooter, Card, CardBody,CardHeader, Heading, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
  {/* <div key={producto.id}>  */}
const Item = ( {producto} ) => {
  return (
    
        <Card className="cardContainer" >
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
        </Card>
  )
};

export default Item;