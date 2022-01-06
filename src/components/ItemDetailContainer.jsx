import React, { useEffect, useState } from 'react'
import { renderProd } from './products'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({})
    
    useEffect(() => {
        renderProd
        .then(resp => setProducto(resp.find(prod => prod.id === 1)))
    }, [])
    
    
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
