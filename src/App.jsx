import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import RefInput from './components/useRef/RefInput'

function App() {

  const handleClick = () => {
    alert('clickeaste a un botón dinámico')
  }

  return (
    <ChakraProvider>
      {/* <NavBar />
      <ItemListContainer title='Tienda' />
      <ItemCount /> */}

      <RefInput />
    </ChakraProvider>

  )
}

export default App
