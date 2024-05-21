import React from 'react'
import Item from '../Item/Item'
import { Box } from '@chakra-ui/react'

const ItemList = ({products}) => {



  return (
    <div>
        {
            products.map((prod) => (
                <Box key={prod.id}>
                    <Item {...prod} />
                </Box>
            ))
        }
    </div>
  )
}

export default ItemList
