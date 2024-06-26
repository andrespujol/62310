import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
    <Flex m={2} justify={'center'} align={'center'}>
      <ChakraLink as={Link} to='/cart' fontSize={'2xl'}><IoCartOutline /></ChakraLink>
      <span>{ getQuantity() > 0 && getQuantity() }</span>
    </Flex>
  )
}

export default CartWidget