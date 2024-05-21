import React, { useEffect, useRef } from 'react'
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'

const RefInput = () => {
    // creamos la referencia
    const refInputFocus = useRef()

    useEffect(() => {

        // accedemos a la referencia
        // con la propiedad current apuntamos al elemento
        // y en este caso, hacemos focus sobre ese elemento
        refInputFocus.current.focus()
    },[])
  return (
    <div>
        <input 
            type='text'
            placeholder='Usuario'
            // aplicamos referencia al elemento
            ref={refInputFocus}
            />
                <input 
            type='email'
            placeholder='email'
        />
                <input 
            type='password'
            placeholder='Contraseña'
        />
    </div>
  )
}

export default RefInput
