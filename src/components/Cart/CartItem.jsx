import React, { useContext } from 'react';
import CartItemCount from './CartItemCount';
import { CartContext } from '../Context/CartContext';
import { BsFillTrashFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartItem({productos}) {

    const { modificarCarrito, quitarItem } = useContext(CartContext)

    const {id, nombre, imagen, precio, stock, cantidad} = productos

    const contadorCarrito = (contador) => {
        modificarCarrito({...productos, contador})
    }

    return (
            
            <div className='cartContainer'>
                <ol className="list-group lista-carrito">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <button type="button" className="btn btn-sm text-center btn-danger me-4" onClick={() => quitarItem({id})}>
                                <BsFillTrashFill />
                            </button>
                            <img src={imagen} alt="imagen de producto" className='img-carrito mt-1 ms-2 me-4' />
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{nombre}</div>
                                ${precio}
                            </div>
                            <CartItemCount stock={stock} cantidad={cantidad} contadorCarrito={contadorCarrito} />
                        </li>
                    </ol>
            </div>)
}

export default CartItem;
