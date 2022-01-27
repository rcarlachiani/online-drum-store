import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

function CartWidget() {

    const { carritoPopUp } = useContext(CartContext)

    const cartPopUp = carritoPopUp()


    return (
        <div className='mx-4'>

            <img src="https://i.ibb.co/YD7sPY9/carrito.png" alt="imagen carrito" className='me-1' style={{width: 25}} />
            <div className="position-absolute mt-1 ms-2  translate-middle badge rounded-pill bg-danger">
                {cartPopUp}
            </div> 

        </div>
    )
}

export default CartWidget
