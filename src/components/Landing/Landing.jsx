import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { Carousel } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'

function Landing() {
  
    return (
        
        <div className='container container-carousel'>

            <h2 className='my-3'><strong>De</strong> bateristas... <strong>para</strong> bateristas</h2>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner carousel-css mb-3">
                    <div className="carousel-item active">
                    <img src="https://i.ibb.co/bF4Dfcf/tama.jpg" className="d-block w-100" alt="baterias" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Baterias</h5>
                        <p>Contamos con amplio stock de las marcas de primera linea</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.ibb.co/ZJhmd13/ludwig.jpg" className="d-block w-100" alt="tambores" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Tambores</h5>
                        <p>Podras encontrar la mejor seleccion y la mas amplia variedad</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.ibb.co/58gDbz8/zildjian.jpg" className="d-block w-100" alt="platillos" /> 
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Platillos</h5>
                        <p>Somos representantes de las firmas mas importantes de la historia</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <Link to='/productos'><button className="btn btn-success mt-2">
                <BsCart4 className='me-2 mb-1'/> Tienda online
            </button></Link>

        </div>
        

    )
}

export default Landing;
