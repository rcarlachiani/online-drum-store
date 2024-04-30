import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';

function ItemDetail({ producto }) {
  const { agregarAlCarrito } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  function onAdd(contador) {
    agregarAlCarrito({ ...producto, cantidad: contador });
  }

  useEffect(() => {
    !producto.imagen ? setLoading(true) : setLoading(false);
  }, [producto]);

  return (
    <>
      {loading ? (
        <div className='spinner-border text-warning' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      ) : (
        <div className='detail-container'>
          <div className='card mb-3 detail-card'>
            <div className='row g-0 ms-4 me-0'>
              <div className='col-md-4'>
                <img
                  src={producto.imagen}
                  className='img-fluid rounded-start detail-img ms-3 me-0'
                  alt='Imagen del producto'
                  style={{ width: 600, padding: 10 }}
                />
              </div>
              <div className='col-md-8 ms-0'>
                <div className='card-body ms-0'>
                  <h4 className='card-title'>{producto.nombre}</h4>
                  <p className='card-text detail-descripcion'>
                    {producto.desc}
                  </p>
                  <p className='card-text detail-precio'>${producto.precio}</p>
                  <ItemCount stock={producto.stock} onAdd={onAdd} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
