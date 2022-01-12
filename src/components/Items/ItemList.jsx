import React from 'react'
import Item from './Item'
import { productos } from '../Products/products'
import './Item.css'

function ItemList() {
    return (
        <div className='ItemContainer'>
            {productos.map(prod=> <Item id={prod.id} imagen={prod.imagen} nombre={prod.nombre} precio={prod.precio} stock={prod.stock} />)}
        </div>
    )
}

export default ItemList


