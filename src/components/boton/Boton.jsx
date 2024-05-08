import React from 'react'

const Boton = () => {

    const handleClick = () => {
        alert('clickeaste')
    }

  return (
    <div>
        <button onClick={handleClick}>Botón</button>
    </div>
  )
}

export default Boton
