import { CardFooter, Card, CardBody,CardHeader, Text, Heading, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Item = ({ titulo, id, detalle, categoria }) => {
  return (
    <div>
        <Card>
          <CardHeader>
            <Heading>{titulo}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{titulo}</Text>
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