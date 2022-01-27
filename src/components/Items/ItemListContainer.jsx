import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { renderProd } from "../Products/products";
import ItemList from './ItemList';
import './Item.css'

function ItemListContainer(propiedades) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()

    useEffect(() => {
        if (idCategoria) {
            renderProd
            .then(resp => setProductos(resp.filter(prod=> prod.categoria === idCategoria)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            renderProd
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [idCategoria])

    return (
        <div style={{marginTop: 20, textAlign: 'center'}}>
            <h2 style={{margin: 20}}>{propiedades.titulo}</h2>
            <h2 className='text-capitalize' style={{margin: 20}}>{idCategoria}</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                { loading ? <div className="spinner-border text-warning" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                    :
                <ItemList productos={productos}/>}
            </div>
        </div>
    )
}

export default ItemListContainer