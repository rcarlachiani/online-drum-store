import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import './Cart.css'

const Cart = () => {

    const { cartList, vaciarCarrito } = useContext(CartContext)

    return (

        <div className='cartContainer'>

            {cartList.map(prod=> 
            
                <ol key={prod.id} className="list-group listaCarrito">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">{prod.nombre}</div>
                        {prod.precio}
                        </div>
                        <span className="badge bg-primary rounded-pill">{prod.cantidad}</span>
                    </li>
                </ol>
            )}

            <button onClick={vaciarCarrito} className="btn btn-sm btn-outline-primary mt-4">Vaciar carrito</button>

        </div>
        
    )
}

export default Cart
