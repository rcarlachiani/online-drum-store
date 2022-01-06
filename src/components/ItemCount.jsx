import React, { useState }  from 'react'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCount(stockProd) {

    const [contador, setContador] = useState(1)
    let stock = stockProd.cantidad
    
    
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
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: 30, marginBottom: 15}}>
                <button type="button" className="btn btn-sm btn-danger" onClick={restaContador} style={{width: 30}}>-</button>
                <button type="button" className="btn btn-light" style={{width: 85}}>{contador}</button>
                <button type="button" className="btn btn-sm btn-success" onClick={sumaContador} style={{width: 30}}>+</button>
            </div>
            <button type="button" className="btn btn-outline-primary" style={{marginBottom: 20}}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
