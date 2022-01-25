import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {

        const indice = cartList.findIndex(i => i.id === items.id)

        if (indice > -1) {
            const cantidadInicial = cartList[indice].cantidad
            let cantidadNew = cantidadInicial + items.cantidad
            cartList[indice].cantidad = cantidadNew
            let newArray = [...cartList]
            setCartList(newArray)
        } else {
            setCartList( [...cartList, items] )
        }

    }

    function vaciarCarrito() {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}