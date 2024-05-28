import React from 'react'
import imagen from '../../../assets/rick.jpg'
import './HojaExternaCss.css'

const HojaExternaCss = () => {
  return (
    <div className='container'>
        <h1 className='title'>Ejemplo hoja externa css</h1>
        <img src={'https://th.bing.com/th/id/R.6dcc55e7b98ec973092198c5440937b7?rik=O86CQA3%2fdsIpVg&pid=ImgRaw&r=0'} alt="" className='imagen'/>
        <p className='parrafo'>Este es un ejemplo de como usar css</p>
    </div>
  )
}

export default HojaExternaCss
