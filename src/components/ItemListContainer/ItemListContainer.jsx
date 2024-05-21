import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res))
      .catch((error) => console.log(error))
  },[])

  console.log(products)
  return (
    <Flex justify={'center'} align={'center'}>
        <Heading className='titulo'>{title}</Heading>
        <ItemList products={products} />
    </Flex>
  )
}

export default ItemListContainer
