import React, { useState } from 'react'
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'

const ItemCount = ({stock, valorInicial, onAdd}) => {
    const [ count, setCount ] = useState(valorInicial)

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }

  return (
    <Flex>
        <Button colorScheme='blue'onClick={decrementar}>-</Button>
        {count}
        <Button colorScheme='blue' onClick={incrementar}>+</Button>
        <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  )
}

export default ItemCount
