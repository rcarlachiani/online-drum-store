import React, { useState }  from 'react'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCount() {
    
    const [contador, setContador] = useState(1)
    
    const sumaContador=()=>{
        if (contador <= 9) {
            setContador(contador+1)
        } else {
            alert("Stock máximo del producto")
        }
    }

    const restaContador=()=>{
        if (contador >= 2) {
            setContador(contador-1)
        } else {
            alert("Cantidad mínima posible para agregar al carrito")
        }
    }
    
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: 30, marginBottom: 15}}>
                <button type="button" class="btn btn-sm btn-danger" onClick={restaContador} style={{width: 30}}>-</button>
                <button type="button" class="btn btn-light" style={{width: 85}}>{contador}</button>
                <button type="button" class="btn btn-sm btn-success" onClick={sumaContador} style={{width: 30}}>+</button>
            </div>
            <button type="button" class="btn btn-outline-primary" style={{marginBottom: 20}}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
