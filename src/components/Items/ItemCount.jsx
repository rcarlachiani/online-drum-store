import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCart4, BsCheckCircle, BsFillCartCheckFill, BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';
import './Item.css'

function ItemCount( {stock, onAdd}) {

    const [contador, setContador] = useState(1)

    const [inputType, setInputType] = useState('button')

    const navegacion = useNavigate();
    
    const sumaContador=()=>{
        if (stock == contador)  {
            alert ('Stock máximo del producto agregado')
        } else {
            setContador(contador+1)
        }
    }

    const restaContador=()=>{
        if (contador > 1) {
            setContador(contador-1)
        } else {
            console.log("Cantidad mínima posible para agregar al carrito")
        }
    }

    function handleInput() {
        setInputType('input')
    }

    const resetContador = () =>{
        setContador(1)
    }
    
    return (
            <div>
                {
                    inputType === 'button' ?

                    <div>
                        <div className='contador-container'>
                            <button type="button" className="btn btn-sm btn-danger" onClick={restaContador}>
                                <BsCaretDownFill />
                            </button>
                            <button type="button" className="btn btn-light contador">{contador}</button>
                            <button type="button" className="btn btn-sm btn-success" onClick={sumaContador}>
                                <BsCaretUpFill />
                            </button>
                        </div>
                        <button onClick={()=> {onAdd(contador); handleInput(); resetContador()}} className="btn btn-outline-primary btn-agregar">
                            <BsFillCartCheckFill className='me-2 mb-1'/> Agregar al carrito
                        </button>
                    </div>
                    
                    :
                    <div className='detail-btn-checkout'>
                        <Link to='/cart'><button className="btn btn-outline-success btn-agregar">
                            <BsCheckCircle className='me-2 mb-1'/> Finalizar compra
                        </button></Link>
                        <Link to='/productos'><button className="btn btn-outline-primary">
                            <BsCart4 className='me-2 mb-1'/>Seguir comprando
                        </button></Link>
                    </div>
                }
            </div>
    )
}

export default ItemCount
