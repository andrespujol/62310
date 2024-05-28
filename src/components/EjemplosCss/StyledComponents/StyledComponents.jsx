import React from 'react'
import { Container, Title, Imagen, Parrafo } from './styles'
const StyledComponents = () => {
  return (
    <Container>
      <Title>Ejemplo Styled-Components</Title>
      <Imagen src='https://th.bing.com/th/id/R.6dcc55e7b98ec973092198c5440937b7?rik=O86CQA3%2fdsIpVg&pid=ImgRaw&r=0' />
      <Parrafo>Este es un ejemplo de como usar css</Parrafo>
    </Container>
  )
}

export default StyledComponents
