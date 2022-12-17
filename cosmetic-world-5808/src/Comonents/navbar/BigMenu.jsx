import React from 'react'
import { Box, Menu, MenuButton, MenuList, MenuGroup, MenuDivider, MenuItem, Button, useDisclosure } from '@chakra-ui/react'

function BigMenu({list}) {
    const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <Box>

    <Menu isOpen={isOpen}>
  <MenuButton as={Button} colorScheme='pink'   onMouseEnter={onOpen} onMouseLeave={onClose} width='80px' padding='10px' border='none'>
    {list}
  </MenuButton>
  <MenuList width='auto' onMouseEnter={onOpen} onMouseLeave={onClose}>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
 </Menu>
    </Box>
  )
}

export default BigMenu