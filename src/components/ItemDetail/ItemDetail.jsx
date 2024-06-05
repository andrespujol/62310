import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Box } from '@chakra-ui/react';

const ItemDetail = ({ nombre, stock }) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidades`)

    }

    return (
        <Box>
            nombre:{nombre}
            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
            <ToastContainer />
        </Box>
    )
}

export default ItemDetail
