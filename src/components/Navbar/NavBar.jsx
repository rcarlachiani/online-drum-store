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
                            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorías
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <Link to='./categoria/palillos' className='links'>
                                            <li className="dropdown-item">Palillos</li>
                                        </Link>
                                        <Link to='./categoria/parches' className='links'>
                                            <li className="dropdown-item">Parches</li>
                                        </Link>
                                        <Link to='./categoria/platillos' className='links'>
                                            <li className="dropdown-item">Platillos</li>
                                        </Link>
                                        <Link to='./categoria/tambores' className='links'>
                                            <li className="dropdown-item">Tambores</li>
                                        </Link>
                                        <Link to='./categoria/pedales' className='links'>
                                            <li className="dropdown-item">Pedales</li>
                                        </Link>
                                        <Link to='./categoria/baterias' className='links'>
                                            <li className="dropdown-item">Baterías</li>
                                        </Link>
                                    </ul>
                                    </li>
                                </ul>
                            </div>
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
