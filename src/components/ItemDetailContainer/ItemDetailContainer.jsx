import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'
import { PacmanLoader } from 'react-spinners'

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        //
    },[])

    return (
        <>
            {
                loading ? 
                <Flex justify={'center'} align={'center'} h={'50vh'}>
                    <PacmanLoader color="#36d7b7" />
                </Flex>   
                : 
                <ItemDetail {...producto} />
            }
        </>
    )
}

export default ItemDetailContainer
