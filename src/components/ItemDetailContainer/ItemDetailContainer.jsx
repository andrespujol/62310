import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex, Spinner } from '@chakra-ui/react'

import { PacmanLoader } from 'react-spinners'

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getProductById(productId)
            .then((data) => {
                if(!data) {
                    navigate('/*')
                }else{
                    setProducto(data)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    },[])

    return (
        <>
              {
                loading ? 
                <Flex justify={'center'} align={'center'} h={'90vh'}>

                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#243F4D'
                    size='xl'
                    /> 
                </Flex>
                : 
                <>
                <Flex justify={'center'} align={'center'} h={'70vh'}>
                <ItemDetail {...producto} />
                </Flex>
                </>
            }
        </>
    )
}

export default ItemDetailContainer
