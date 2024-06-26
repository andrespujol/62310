import React, { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])


    const addItem = (productToAdd, quantity) => {
        const newItem = {
            ...productToAdd,
            quantity
        }
        if(isInCart(newItem.id)) {
            const updatedCart = cart.map((prod) => {
                if(prod.id === newItem.id) {
                    return { ...prod, quantity: prod.quantity + newItem.quantity }
                }
                return prod
            })
            setCart(updatedCart)
        }else {
        setCart([...cart, newItem])
        }
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const removeItem = (id) => {
        const updatedCart = cart.filter((prod) => prod.id !== id)
        setCart([...updatedCart])
    }
    const clearCart = () => {
        setCart([])
    }
    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    }
    const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }


  return (
    <Context.Provider 
        value={{
            cart,
            setCart,
            addItem,
            removeItem, 
            clearCart,
            getTotal,
            getQuantity
        }}>
            {children}
    </Context.Provider>

  )
}

export default Context

