import React from 'react'
import Item from './Item'
import { productos } from "./products"

function ItemList() {
    return (
        <div style={{display: 'flex'}}>
            {productos.map(prod=> <Item id={prod.id} imagen={prod.imagen} nombre={prod.nombre} precio={prod.precio} />)}
        </div>
    )
}

export default ItemList


