import React from 'react'
import CartWidget from '../Cart/CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="https://i.ibb.co/J7dM3BW/snLogo.png" alt="store-logo" style={{width: 35, paddingRight: 5}} />
                    <Link to='/' className='links'>
                        <a className="navbar-brand" href="#">Drumstore</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to='/' className='links'>
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </Link>
                            <a className="nav-link" href="#">Categorías</a>
                            <a className="nav-link" href="#">Contacto</a>
                        </div>
                    </div>
                    <Link to='/checkout'>
                        <CartWidget />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
