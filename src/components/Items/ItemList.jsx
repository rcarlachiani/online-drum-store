import React from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';

function ItemList({ productos }) {
  return (
    <div className='ItemContainer mb-5'>
      {productos.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          categoria={prod.categoria}
          imagen={prod.imagen}
          nombre={prod.nombre}
          precio={prod.precio}
          stock={prod.stock}
        />
      ))}
    </div>
  );
}

export default ItemList;
