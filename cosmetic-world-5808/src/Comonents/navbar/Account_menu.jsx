import React from 'react'
import { Box, MenuButton, Menu, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import '../../styleCollection/Navbar.css' 
import { menu_btn_style, menu_btn_signup, menu_option_common } from '../../styleCollection/navbarThemeObj'


function Account_menu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
       <Menu isOpen={isOpen}>
  <MenuButton
    px={4}
    py={2}
    mb={0}
    transition='all 0.2s'
    borderRadius='md'
    border='none'
    borderWidth='1px'
    _hover={{bg:'f2f2f2'}}
    onMouseEnter={onOpen} 
    onMouseLeave={onClose}
    
  >
    Accounts 
  </MenuButton>
  <MenuList m={0} onMouseEnter={onOpen} onMouseLeave={onClose} w='300px' p='10px'>
    <MenuItem style={menu_btn_style}>Login</MenuItem>
    <MenuItem style={menu_btn_signup}>Register</MenuItem>
    <MenuDivider />
    <MenuItem style={menu_option_common}>My Favourite</MenuItem>
    <MenuItem style={{padding:'10px'}}>Your Orders</MenuItem>
    <MenuItem style={{padding:'10px'}}>Your Auto-Replenishments</MenuItem>
    <MenuItem style={{padding:'10px'}}>Your Referrals</MenuItem>
  </MenuList>
</Menu> 

    </Box>
  )
}

export default Account_menu