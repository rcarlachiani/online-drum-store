import React, { useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css'

function ItemCount(stockProd) {

    const [contador, setContador] = useState(1)
    
    let stock = stockProd.stock
    
    const sumaContador=()=>{
        if (stock == contador)  {
            alert ('Stock máximo del producto agregado')
        } else {
            setContador(contador+1)
        }
    }

    const restaContador=()=>{
        if (contador > 1) {
            setContador(contador-1)
        } else {
            console.log("Cantidad mínima posible para agregar al carrito")
        }
    }
    
    return (
        <div>
            <div className='contador-container'>
                <button type="button" className="btn btn-sm btn-danger btn-cantidad" onClick={restaContador}>-</button>
                <button type="button" className="btn btn-light contador">{contador}</button>
                <button type="button" className="btn btn-sm btn-success btn-cantidad" onClick={sumaContador}>+</button>
            </div>
        </div>
    )
}

export default ItemCount
