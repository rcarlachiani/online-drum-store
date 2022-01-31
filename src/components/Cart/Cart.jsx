import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { BsBoxSeam, BsFillCartCheckFill, BsFillCartXFill } from 'react-icons/bs';
import CartItem from './CartItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'

const Cart = () => {

    const {cartList, precioTotalCarrito, vaciarCarrito} = useContext(CartContext)

    const costoCompra = precioTotalCarrito()

    if (cartList.length!==0) {

        return (

            <div className='cartContainer'>
                
                {cartList.map(productos=>(<CartItem key={productos.id} productos={productos}/>))}
                <h2 className='mt-4'>TOTAL: ${costoCompra}</h2> 
                <button onClick={vaciarCarrito} className="btn btn-outline-primary mt-4"><BsFillCartXFill className='me-2 mb-1' />  Vaciar carrito</button>
                <Link to='/checkout'>
                    <button className="btn btn-outline-success mt-4"><BsBoxSeam className='me-2 mb-1' />Generar orden</button>
                </Link>
            </div>
            
        )

    } else {

        return (

            <div className='d-flex flex-column align-items-center mt-4'>

                <h2>¡Su carrito esta vacio!</h2>

                <Link to='/productos'>
                    <button className="btn btn-success mt-4"> <BsFillCartCheckFill className='me-2 mb-1' /> Ir a comprar</button>
                </Link>

            </div>

        )

    }

    
}

export default Cart
