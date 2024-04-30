import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';

function ItemListContainer(propiedades) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      const db = getFirestore();
      const queryCollection = query(
        collection(db, 'Productos'),
        where('categoria', '==', idCategoria)
      );
      getDocs(queryCollection)
        .then((res) =>
          setProductos(
            res.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => err)
        .finally(() => setLoading(false));
    } else {
      const db = getFirestore();
      const queryCollection = query(collection(db, 'Productos'));
      getDocs(queryCollection)
        .then((res) =>
          setProductos(
            res.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => err)
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  return (
    <div className='text-center'>
      <h2 className='m-5'>{propiedades.titulo}</h2>
      <h2 className='text-capitalize m-5 '>{idCategoria}</h2>
      <div className='d-flex justify-content-center'>
        {loading ? (
          <div className='spinner-border text-warning' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        ) : (
          <ItemList productos={productos} />
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
