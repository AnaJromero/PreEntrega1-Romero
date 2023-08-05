import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Spacer, Box } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (

    <Flex className='containerNavBar'>
      <Box>
      <Menu >
        <MenuButton className='menu'
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
          backgroundColor='#D9D9D9'
        />
        <MenuList>
          <MenuItem>
            <Link to={`/categoria/${'entrada'}`}>
              Entrada
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/categoria/${'hamburguesas'}`}>
              Hamburguesas 
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      </Box>
      <Spacer/>

      <Link to={"/"}>
        <img className='logo'/*  src="./src/assets/foodtruck1.jpg" *//>
      </Link>

      <Box>
        <Link to={"/cart"}>
          <CartWidget/>
        </Link>
      </Box>

    </Flex>
  )
}

export default Navbar