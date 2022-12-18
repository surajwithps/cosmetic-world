import React from 'react'
import {Flex, Center} from '@chakra-ui/react'
import BigMenu from "./BigMenu"
function NavBigMenu() {
const navListHeading = ["Brands", "Holiday Shop", "Browse By", "BestSellers", "Skin Care", "Makeup", "Hair Care", "Bath & Body", "Tools & Devices", 'Gifts & Sets', "BeautyFIX", "Offers", "New", "Skin 101"]

  return (
      
      <Flex justifyContent='center' alignItems='center' gap='20px'   position="relative" zIndex="dropdown">
        {navListHeading.map((item)=><BigMenu key={item} list={item}/>)}
      </Flex>

)
}
       

//big menu is component need to map to create all hover big menus
export default NavBigMenu