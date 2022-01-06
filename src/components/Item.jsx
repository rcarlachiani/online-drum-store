import React from 'react'
import ItemCount from "./ItemCount";

function Item(prod) {
    return (
        <div key={prod.id} className="card" style={{width: '18rem', margin: 10}}>
            <img src={prod.imagen} className="card-img-top" alt="Imagen de producto" />
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">{prod.precio}</p>
                <button type="button" className="btn btn-sm btn-outline-primary" style={{fontSize: 12}}>Ver detalle</button>
            </div>
            <ItemCount cantidad={prod.stock}/>
        </div>
    )
}

export default Item
