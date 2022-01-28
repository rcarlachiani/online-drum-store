import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from './ItemDetail' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css'


const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryProd = doc(db, 'Productos', idDetalle)
        getDoc(queryProd)
        .then(res => setProducto( {id: res.id, ...res.data()} ))

    }, [])
    
    
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer