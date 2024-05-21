import React from 'react'

const Item = ({nombre, precio}) => {
  return (
    <div>
        <h1>{nombre}</h1>
        <h2>{precio}</h2>
    </div>
  )
}

export default Item
