import { CardFooter, Card, CardBody,CardHeader, Text, Heading, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Item = ({ nombre, id, description, category }) => {
  return (
    <div>
        <Card>
          <CardHeader>
            <Heading>{nombre}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{description}</Text>
            <Text>{category}</Text>
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