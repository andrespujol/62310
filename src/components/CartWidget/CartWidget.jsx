import { Box } from '@chakra-ui/react';
import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  return (
    <Box m={2}>
      <IoCartOutline />
    </Box>
  )
}

export default CartWidget