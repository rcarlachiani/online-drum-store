import React from 'react';

function Success(idCompra) {

    orderId = idCompra

    return <div>

        <h1>¡Felicidades, ha concretado su compra satisfactoriamente!</h1>
        <h2>Su numero de orden es: {orderId}</h2>
        <p>Nos contactaremos a la brevedad via mail para coordinar el envio de su/s producto/s</p>
        <button className='btn btn-primary'>Volver al home</button>

    </div>;
}

export default Success;
