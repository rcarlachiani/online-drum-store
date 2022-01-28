import React, { useState } from 'react';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartItemCount({stock, cantidad, contadorCarrito}) {

    const [contadorCart, setContador] = useState(cantidad)

    const minimo = 1

    const sumaCantidad = () => {
        if (contadorCart < stock) {
            let suma = contadorCart +1
            setContador(suma)
            contadorCarrito(suma)
        } else {
            alert('Stock máximo del producto agregado')
        }
    }

    const restaCantidad = () => {
        if (contadorCart > minimo) {
            let resta = contadorCart -1
            setContador(resta)
            contadorCarrito(resta)
        }
    }

  return (
            <div className='ms-4'>
                <button type="button" className="btn btn-sm btn-danger" onClick={restaCantidad}>
                    <BsCaretDownFill />
                </button>
                <button type="button" className="btn btn-light">{contadorCart}</button>
                <button type="button" className="btn btn-sm btn-success" onClick={sumaCantidad}>
                    <BsCaretUpFill />
                </button>
            </div>
  )
}

export default CartItemCount;
