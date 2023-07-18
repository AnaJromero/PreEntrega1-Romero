import React from 'react';
import { Menu, MenuButton, Button, MenuList, MenuItem, IconButton, Flex, Spacer, Box } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import CartWidget from './CartWidget'


const Navbar = () => {

  return (

    <Flex className='containerNavBar'>
      <Box>
      <Menu >
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList>
          <MenuItem>Inicio</MenuItem>
          <MenuItem>Entradas</MenuItem>
          <MenuItem>Hamburguesas</MenuItem>
          <MenuItem>Bebidas</MenuItem>
        </MenuList>
      </Menu>
      </Box>

      <Spacer/>
      <Box>
        <h1>YellowTruck</h1>
      </Box>

      <Spacer />

      <Box>
        <CartWidget/>
      </Box>
    </Flex>
  )
}

export default Navbar