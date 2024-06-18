import { Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
    <Flex m={2} justify={'center'} align={'center'}>
      <Link to='/cart'><IoCartOutline /></Link>
      <span>{ getQuantity() > 0 && getQuantity() }</span>
    </Flex>
  )
}

export default CartWidget