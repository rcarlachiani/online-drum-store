import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css'

function ItemCount( {stock, onAdd}) {

    const [contador, setContador] = useState(1)
    
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

    const [inputType, setInputType] = useState('button')

    function handleInput() {
        setInputType('input')
    }
    
    return (
        <div>
            <div className='contador-container'>
                <button type="button" className="btn btn-sm btn-danger btn-cantidad" onClick={restaContador}>-</button>
                <button type="button" className="btn btn-light contador">{contador}</button>
                <button type="button" className="btn btn-sm btn-success btn-cantidad" onClick={sumaContador}>+</button>
            </div>
            {
                inputType === 'button' ?
                <button onClick={()=> {onAdd(contador); handleInput()}} className="btn btn-outline-primary btn-agregar">Agregar al carrito</button>
                :
                <div className='detail-btn-checkout'>
                    <Link to='/checkout'><button className="btn btn-outline-success btn-agregar">Finalizar compra</button></Link>
                    <Link to='/'><button className="btn btn-sm btn-outline-primary">Seguir comprando</button></Link>
                </div>
            }
        </div>
    )
}

export default ItemCount
