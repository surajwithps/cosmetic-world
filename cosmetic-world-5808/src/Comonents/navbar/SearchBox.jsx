import React from 'react'
import { Box, Input } from '@chakra-ui/react'

function SearchBox() {
  return (
    <Box>
       <Input placeholder='Search Products' type='text' w='400px' p='8px' outline='none'/>
    </Box>
  )
}

export default SearchBox