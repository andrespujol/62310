import React, { useState } from 'react'
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'

const ItemCount = () => {
    const [ count, setCount ] = useState(1)
    const stock = 5
    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > 1 && setCount(count - 1)
    }

  return (
    <Flex>
        <Button colorScheme='blue'onClick={decrementar}>-</Button>
        {count}
        <Button colorScheme='blue' onClick={incrementar}>+</Button>
    </Flex>
  )
}

export default ItemCount
