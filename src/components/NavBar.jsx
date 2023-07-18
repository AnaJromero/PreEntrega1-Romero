import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Spacer, Box, Image } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import CartWidget from './CartWidget'


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
          <MenuItem>Inicio</MenuItem>
          <MenuItem>Entradas</MenuItem>
          <MenuItem>Hamburguesas</MenuItem>
          <MenuItem>Bebidas</MenuItem>
          <MenuItem>Registro o Iniciar Sesiòn</MenuItem>
        </MenuList>
      </Menu>
      </Box>

      <Spacer/>
       <Image className='logo' src="./src/assets/foodtruck1.jpg"/>
      <Spacer />

      <Box>
        <CartWidget/>
      </Box>
    </Flex>
  )
}

export default Navbar