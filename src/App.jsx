import './App.css'
import Boton from './components/boton/Boton'
import BotonDinamico from './components/botonDinamico/BotonDinamico'
function App() {

  const handleClick = () => {
    alert('clickeaste a un botón dinámico')
  }

  return (
    <div>
      <Boton />
      <BotonDinamico 
        texto={'Soy un botón dinámico'}
        clase={'btnDinamico'}
        id={'btnDinamico'}
        disabled={false}
        handleClick={handleClick}
      />
    </div>
  )
}

export default App
