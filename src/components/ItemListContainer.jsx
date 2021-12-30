import { useState, useEffect } from 'react';
import { renderProd } from "./products";
import ItemList from './ItemList';

function ItemListContainer(propiedades) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        renderProd
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])
    
    return (
        <div style={{marginTop: 20}}>
            <h1 style={{margin: 20}}>{propiedades.titulo}</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                { loading ? <div class="spinner-border text-warning" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                    :
                <ItemList />}
            </div>
        </div>
    )
}

export default ItemListContainer
