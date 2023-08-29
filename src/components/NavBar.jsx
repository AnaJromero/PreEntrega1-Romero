import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Spacer, Box, AbsoluteCenter } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <Flex className='containerNavBar'>
      <Box >
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
              <Link to={"/"}>
                Inicio
              </Link>
            </MenuItem>
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

      <Spacer>
        <Box position='relative' h='100px'>
          <AbsoluteCenter>
            <Link to={"/"}>
                  <img className='logo'  src="../src/assets/foodtruck.png" />
            </Link>
          </AbsoluteCenter>
        </Box>
      </Spacer>

        <Box> 
          <CartWidget/>
        </Box>
    </Flex>
  );
};

export default Navbar;