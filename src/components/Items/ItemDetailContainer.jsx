import React, { useEffect, useState } from 'react'
import { renderProd } from '../Products/products'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import './Item.css'


const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()

    useEffect(() => {
        renderProd
        .then(resp => setProducto(resp.find(prod=> prod.id === idDetalle)))
    }, [])
    
    
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer