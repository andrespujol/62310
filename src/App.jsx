import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ButtonMicrodesafio from './components/Button/ButtonMicrodesafio'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  const handleClick = () => {
    alert('clickeaste a un botón dinámico')
  }

  return (
    <ChakraProvider>
      {/* <ButtonMicrodesafio 
        color='red'
        // label='Soy un botón de Chakra'
        onClickCallback={() => alert('clickeaste')}
        style={{ BorderRadius: '8px', margin: '2rem', fontSize: '1.5rem'}}
        disabled={false}
      >
        Clickeá
      </ButtonMicrodesafio> */}
      <NavBar />
      <ItemListContainer title='Tienda' />
    </ChakraProvider>

  )
}

export default App
