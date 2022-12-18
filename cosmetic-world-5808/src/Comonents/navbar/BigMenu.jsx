import React from 'react'
import { Box, Heading, Menu, MenuButton, MenuList, MenuGroup, MenuDivider, MenuItem, Button, useDisclosure } from '@chakra-ui/react'

function BigMenu({list}) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    

  return (
   
    <Box>
     
    <Menu isOpen={isOpen}>
  <MenuButton as={Button} colorScheme='blue'   onMouseEnter={onOpen} onMouseLeave={onClose}  padding='3px' margin='0' border='none'>
    {list}
  </MenuButton>
  <MenuList width='auto' onMouseEnter={onOpen} onMouseLeave={onClose}>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>hell</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
 </Menu>
    </Box>
  )
}

export default BigMenu