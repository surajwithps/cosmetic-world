import React from 'react'
import { Box, MenuButton, Menu, MenuList, MenuItem} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import {nav_login_menu} from '../../styleCollection/navbarThemeObj'
function Cart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
             <Menu isOpen={isOpen}>
  <MenuButton  style={nav_login_menu}
  onMouseEnter={onOpen}
  onMouseLeave={onClose}
  >
    Cart 
  </MenuButton>
  <MenuList m={0} onMouseEnter={onOpen} onMouseLeave={onClose}>
    
    <MenuItem>No Item Currenty in your Cart</MenuItem>
   
  </MenuList>
</Menu> 
    </Box>
  )
}

export default Cart