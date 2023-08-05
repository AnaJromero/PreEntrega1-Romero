import { CardFooter, Card, CardBody,CardHeader, Text, Heading, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Item = ({ nombre, id, detalle, categoria }) => {
  return (
    <div>
        <Card>
          <CardHeader>
            <Heading>{nombre}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{nombre}</Text>
            <Text>{detalle}</Text>
            <Text>{categoria}</Text>
          </CardBody>
          <CardFooter>
            <Button>
              <Link to={`/item/${id}`}>
                Ver mas
              </Link>
            </Button>
          </CardFooter>
        </Card>
  </div>
  )
}

export default Item