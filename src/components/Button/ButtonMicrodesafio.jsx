import React, { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const ButtonMicrodesafio = ({ color, label, onClickCallback, style, disabled, children }) => {
    const [ background, setBackground ] = useState(color)

    const handleClick = () => {
        onClickCallback && onClickCallback()
        // setBackground('#7F636E')
        setBackground(prevColor => (prevColor === '#7F636E' ? color : '#7F636E'))
    }

  return (
    <div>
        <Button 
        style={{
            background,
            ...style
        }}
        onClick={handleClick}
        disabled={disabled}
        >
            {children}
        </Button>
    </div>
  )
}

export default ButtonMicrodesafio
