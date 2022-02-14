import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { BsFillBagCheckFill, BsFillPencilFill } from 'react-icons/bs';
import { addDoc, collection, getFirestore } from 'firebase/firestore'

function Checkout() {

    const { cartList, carritoPopUp, precioTotalCarrito, vaciarCarrito } = useContext(CartContext)

    const [idCompra, setIdCompra] = useState('')

    const [dataForm, setDataForm] = useState({
        nombre: '',
        telefono: '',
        email: '',
        direccion: '',
        localidad: '',
        cp: ''
    })

    const cartResumen = carritoPopUp()

    const sumaCart = precioTotalCarrito()

    const costoCompra = precioTotalCarrito()

    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = async (e) => {

        e.preventDefault()

        let orden = {}

        orden.comprador = dataForm
        orden.total = costoCompra

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.cantidad;

            return {id, nombre, precio}
        })
        
        const db = getFirestore()
        const ordenCollection = collection(db, 'Ordenes')

        await addDoc(ordenCollection, orden)
        .then (res => setIdCompra(res.id))
        .catch (err => console.log(err))
        .finally (()=> console.log('Compra exitosa'))

    }
    
  return (

            <div className='d-flex justify-content-center mt-3'>

                <div className='form-container p-4 mx-4'>
                    
                    <Form>

                        <Form.Group className="mb-3">
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control type='text' name='nombre' onChange={handleChange} value={dataForm.nombre}/>
                        </Form.Group>

                        <Form.Group className="mb-3"> 
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type='text' name='telefono' onChange={handleChange} value={dataForm.telefono}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' placeholder="ejemplo@ejemplo.com" onChange={handleChange} value={dataForm.email}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control type='text' name='direccion' onChange={handleChange} value={dataForm.direccion}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Localidad</Form.Label>
                            <Form.Control type='text' name='localidad' onChange={handleChange} value={dataForm.localidad}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Codigo postal</Form.Label>
                            <Form.Control type='text' name='cp' onChange={handleChange} value={dataForm.cp}/>
                        </Form.Group>
                        
                        <Button variant="outline-success" type="submit" className='mt-2' onClick={finalizarCompra} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <BsFillBagCheckFill className='me-2 mb-1'/>
                            Finalizar orden
                        </Button>

                    </Form>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Compra exitosa</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ¡Felicitaciones por su compra!<br />
                                Su ID de orden es: <b>{idCompra}</b><br />
                                Nos pondremos en contacto a la brevedad vía mail
                            </div>
                            <div className="modal-footer">
                                <Link to='/'>
                                    <button onClick={vaciarCarrito} type="button" className="btn btn-primary" data-bs-dismiss="modal">Volver al home</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                    
                <div className='resumen-container p-4 mx-4'>   
                    <h2>Resumen de compra</h2>
                    <p className='mb-3 resumen-items'>Cantidad de items: {cartResumen} </p>
                    <div className='item-resumen'>  
                            {cartList.map(prod => 
                                
                                <ol key={prod.id} className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                        <div className="fw-bold">{prod.nombre}</div>
                                        Subtotal: $ {prod.precio * prod.cantidad}
                                        </div>
                                        <span className="badge bg-primary rounded-pill">{prod.cantidad}</span>
                                    </li>
                                </ol>

                            )}
                    </div>
                    <br />
                    <h4>Total de la compra: <b>${sumaCart}</b></h4>
                    <Link to="/cart">
                        <button className='btn btn-outline-primary me-2 mt-3'>
                            <BsFillPencilFill className='me-2 mb-1'/>Modificar compra</button>
                    </Link>

                </div>
                            
            </div>

  )
}

export default Checkout;
