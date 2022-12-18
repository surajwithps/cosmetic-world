import {Flex, Box, Spacer} from "@chakra-ui/react"
import Logo from "./Logo"
import SearchBox from './SearchBox'
import Account_menu from "./Account_menu"
import Cart from './Cart'
import NavBigMenu from "./NavBigMenu"
// import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

export default function Navbar() {
    
    return (
        <Box py='20'>
           <Flex alignItems='center' gap='2' flexWrap='wrap'>
             <Logo />
             <Spacer />
             <SearchBox />
             <Spacer />
             <Account_menu />
             <Spacer /> 
             <Cart/>
             <Spacer />
           </ Flex>
           <Flex justifyContent='center' alignItems='center' gap='20px' width='90%'>
            <NavBigMenu />
           </Flex>
        </Box>
      
    )
}