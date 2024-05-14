import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({title}) => {
  return (
    <Flex justify={'center'} align={'center'}>
        <Heading className='titulo'>{title}</Heading>
    </Flex>
  )
}

export default ItemListContainer
