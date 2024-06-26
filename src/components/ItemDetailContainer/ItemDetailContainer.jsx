import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'

import { PacmanLoader } from 'react-spinners'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            // obtenemos la referencia a un producto en específico
            const queryRef = doc(db, 'productos', productId)
            // obtenemos el documente
            const response = await getDoc(queryRef)
            // creamos el objeto con la data y el id
            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProducto(newItem)
            setLoading(false)
        }
        getData()
    },[])

    return (
        <>
              {
                loading ? 
                <Flex justify={'center'} align={'center'} h={'90vh'}>

                    <PacmanLoader color="#36d7b7" />            
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
