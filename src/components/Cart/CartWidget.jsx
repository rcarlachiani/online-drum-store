import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget() {
  const { carritoPopUp, cartList } = useContext(CartContext);

  const cartPopUp = carritoPopUp();

  if (cartList.length !== 0) {
    return (
      <div className='mx-4'>
        <img
          src='https://i.ibb.co/YD7sPY9/carrito.png'
          alt='imagen carrito'
          className='me-1'
          style={{ width: 25 }}
        />
        <div className='position-absolute mt-1 ms-2  translate-middle badge rounded-pill bg-danger'>
          {cartPopUp}
        </div>
      </div>
    );
  } else {
    return (
      <div className=''>
        <img
          src='https://i.ibb.co/YD7sPY9/carrito.png'
          alt='imagen carrito'
          className='me-1'
          style={{ width: 25 }}
        />
      </div>
    );
  }
}

export default CartWidget;
