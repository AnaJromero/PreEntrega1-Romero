import React from 'react';
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Spacer, Box } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons';
import CartWidget from './CartWidget'


const Navbar = () => {

  return (

    <Flex>
      <Box p="2" bg="yellow" color="Black">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Inicio</MenuItem>
          <MenuItem>Entradas</MenuItem>
          <MenuItem>Hamburguesas</MenuItem>
          <MenuItem>Bebidas</MenuItem>
        </MenuList>
      </Menu>
      </Box>

      <Spacer />
      <Box p="2" bg="yellow" color="Black">
        <h1>YelloTruck</h1>
      </Box>

      <Spacer />

      <Box p="2" bg="yellow" color="Black">
        <CartWidget/>
      </Box>
    </Flex>
  )
}

export default Navbar