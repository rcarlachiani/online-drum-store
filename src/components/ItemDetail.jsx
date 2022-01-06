import React from 'react'
import ItemCount from './ItemCount'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail({producto}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="card mb-3" style={{maxWidth: 900, padding: 10}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={producto.imagen} class="img-fluid rounded-start" alt="Imagen del producto" style={{width: 600, padding: 10}} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{producto.nombre}</h4>
                            <p className="card-text" style={{fontSize: 15}}>{producto.desc}</p>
                            <p className="card-text" style={{fontSize: 20}}>{producto.precio}</p>
                            <ItemCount cantidad={producto.stock}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
