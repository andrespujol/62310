import React from 'react'

const BotonDinamico = ({texto, clase, id, disabled, handleClick}) => {
  return (
    <div>
        <button 
            onClick={handleClick}
            id={id}
            className={clase}
            disabled={disabled}
        >
            {texto}
        </button>
    </div>
  )
}

export default BotonDinamico
