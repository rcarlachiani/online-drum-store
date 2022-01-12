import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

function Item(prod) {
    return (
        <div key={prod.id} className="card" style={{width: '18rem'}}>
            <img src={prod.imagen} className="card-img-top" alt="Imagen de producto" />
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">{prod.precio}</p>
                <Link to={`/detalle/${prod.id}`}>
                    <button type="button" className="btn btn-sm btn-outline-primary btn-detail">Ver detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item