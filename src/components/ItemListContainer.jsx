import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(propiedades) {
    return (
        <div style={{marginTop: 20}}>
            <h1>{propiedades.titulo}</h1>
            <ItemCount />
        </div>
    )
}

export default ItemListContainer
