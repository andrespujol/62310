import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ({title, texto}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      // obtenemos la referencia a la colección
      const coleccion = collection(db, 'productos')

      // creamos una referencia de consulta
      const queryRef = !categoryId ?
      coleccion 
      :
      // con query, le pasamos la colección y los datos a filtrar
      query(coleccion, where('categoria', '==', categoryId))

      // obtenemos los documentos
      const response = await getDocs(queryRef)

      // mapeamos los documentos y creamos un nuevo objeto con los datos del producto y el id que definimos de manera automática
      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProducts(productos)
      setLoading(false)
    }

    getData()
  },[categoryId])

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}> 
      <Heading color={'#FCD7B6'} mt={10}>{title}</Heading>
      {
        loading ? 
        <Flex justify={'center'} align={'center'} h={'50vh'}>
          <PacmanLoader color="#36d7b7" />
        </Flex>
        : 
        <ItemList products={products} texto={texto}/>
      }
    </Flex>
  )
}

export default ItemListContainer
