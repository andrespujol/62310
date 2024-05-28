import './App.css'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import CountryInfo from './components/microdesafio/CountryInfo/CountryInfo'
import HojaExternaCss from './components/EjemplosCss/HojaExterna/HojaExternaCss'
import EjemploSass from './components/EjemplosCss/Sass/EjemploSass'
import CssModules from './components/EjemplosCss/CssModules/CssModules'
import StyledComponents from './components/EjemplosCss/StyledComponents/StyledComponents'

function App() {

  const handleClick = () => {
    alert('clickeaste a un botón dinámico')
  }

  return (
    <ChakraProvider>
      {/*<ItemCount /> */}
      {/* <CountryInfo /> */}

      {/* Ejemplo css */}
      {/* <Flex wrap={'wrap'} justify={'center'} align={'center'}>
        <HojaExternaCss />
        <EjemploSass />
        <CssModules />
        <StyledComponents />
      </Flex> */}

      {/* proyecto: */}

      <NavBar />
      <ItemListContainer title='Tienda' />
    </ChakraProvider>

  )
}

export default App
