import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css'

const AddCarrito= ({handleInput})=> {
    return  <button onClick={handleInput} className="btn btn-outline-primary btn-agregar">Agregar al carrito</button>
}

const GoCheckout= ()=> {
    return ( 
        <div className='detail-btn-checkout'>
            <Link to='/checkout'><button className="btn btn-outline-success btn-agregar">Finalizar compra</button></Link>
            <Link to='/'><button className="btn btn-sm btn-outline-primary">Volver al home</button></Link>
        </div>
    )
    
}

function ItemDetail({producto}) {

    const [showCount, setShowCount] = useState(true)

    const [inputType, setInputType] = useState('button')

    const handleInput =()=> {
        setInputType('input')
        setShowCount(false)
    }

    return (
        <div className= 'detail-container'>
            <div className="card mb-3 detail-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={producto.imagen} className="img-fluid rounded-start detail-img" alt="Imagen del producto" style={{width: 600, padding: 10}} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{producto.nombre}</h4>
                            <p className="card-text detail-descripcion">{producto.desc}</p>
                            <p className="card-text detail-precio">{producto.precio}</p>
                            {
                                showCount ? <ItemCount stock={producto.stock} /> 
                                : 
                                null
                            }
                            {
                                inputType === 'button' ?
                                    <AddCarrito handleInput={handleInput}/>
                                :
                                    <GoCheckout />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail