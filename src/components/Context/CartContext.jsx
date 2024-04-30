import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function carritoPopUp() {
    const totalItemsCarrito = cartList
      .map((prod) => prod.cantidad)
      .reduce((cantPrevia, cantActual) => cantPrevia + cantActual, 0);

    return totalItemsCarrito;
  }

  function agregarAlCarrito(items) {
    const indice = cartList.findIndex((i) => i.id === items.id);

    if (indice > -1) {
      const cantidadInicial = cartList[indice].cantidad;
      let cantidadNew = cantidadInicial + items.cantidad;
      cartList[indice].cantidad = cantidadNew;
      let newArray = [...cartList];
      setCartList(newArray);
    } else {
      setCartList([...cartList, items]);
    }
  }

  function modificarCarrito(items) {
    const cartIndex = cartList.findIndex((i) => i.id === items.id);
    cartList[cartIndex].cantidad = items.contador;
    let newArray = [...cartList];
    setCartList(newArray);
  }

  function precioTotalCarrito() {
    const sumaTotal = cartList
      .map((total) => total.cantidad * total.precio)
      .reduce((costoPrevio, costoActual) => costoPrevio + costoActual, 0);
    return sumaTotal;
  }

  function quitarItem(items) {
    setCartList(cartList.filter((item) => item.id !== items.id));
  }

  function vaciarCarrito() {
    setCartList([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        carritoPopUp,
        agregarAlCarrito,
        modificarCarrito,
        precioTotalCarrito,
        quitarItem,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
