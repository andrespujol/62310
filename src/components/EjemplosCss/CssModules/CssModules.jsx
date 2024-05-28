import React from 'react'
import styles from './CssModules.module.css'

const CssModules = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Ejemplo CssModules</h1>
        <img src={'https://th.bing.com/th/id/R.6dcc55e7b98ec973092198c5440937b7?rik=O86CQA3%2fdsIpVg&pid=ImgRaw&r=0'} alt="" className={styles.imagen}/>
        <p className={styles.parrafo}>Este es un ejemplo de como usar css</p>
    </div>
  )
}

export default CssModules
