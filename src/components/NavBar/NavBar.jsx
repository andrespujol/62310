import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Link as ChakraLink
  } from '@chakra-ui/react'
  import logo from '../../assets/logo.png'
  import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex 
        h={'10vh'} 
        w={'100%'} 
        justify={'space-between'} 
        align={'center'} 
        backgroundColor={'#55868C'}
        >
        <ChakraLink as={Link} width={'30%'} to='/'>
          <Image w={'60%'} src={logo}/>
        </ChakraLink>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Categorías
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to='/categorias/Remeras'>Remeras</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/categorias/Buzos'>Buzos</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/categorias/Pijamas'>Pijamas</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/categorias/Zapatillas'>Zapatillas</Link>
              </MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  )
}

export default NavBar
